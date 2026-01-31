import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function pushToGitHub() {
  const octokit = await getUncachableGitHubClient();
  const owner = 'Abdullahba99';
  const repo = 'shopify';
  const defaultBranch = 'main';

  console.log('Getting authenticated user...');
  const { data: user } = await octokit.users.getAuthenticated();
  console.log(`Authenticated as: ${user.login}`);

  const shopifyThemeDir = 'shopify-theme';
  const files: { path: string; content: string }[] = [];

  function readFilesRecursively(dir: string, baseDir: string = '') {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const relativePath = baseDir ? `${baseDir}/${item}` : item;
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        readFilesRecursively(fullPath, relativePath);
      } else {
        const content = fs.readFileSync(fullPath, 'utf-8');
        files.push({ path: relativePath, content });
      }
    }
  }

  console.log('Reading Shopify theme files...');
  readFilesRecursively(shopifyThemeDir);
  console.log(`Found ${files.length} files to push`);

  console.log('Uploading files to repository...');
  
  for (const file of files) {
    console.log(`Uploading: ${file.path}`);
    try {
      await octokit.repos.createOrUpdateFileContents({
        owner,
        repo,
        path: file.path,
        message: `Add ${file.path}`,
        content: Buffer.from(file.content).toString('base64'),
        branch: defaultBranch
      });
    } catch (error: any) {
      if (error.status === 422 && error.message.includes('sha')) {
        const { data: existingFile } = await octokit.repos.getContent({
          owner,
          repo,
          path: file.path,
          ref: defaultBranch
        });
        
        if (!Array.isArray(existingFile) && existingFile.type === 'file') {
          await octokit.repos.createOrUpdateFileContents({
            owner,
            repo,
            path: file.path,
            message: `Update ${file.path}`,
            content: Buffer.from(file.content).toString('base64'),
            sha: existingFile.sha,
            branch: defaultBranch
          });
        }
      } else {
        throw error;
      }
    }
  }

  console.log(`\nSuccessfully pushed all files to https://github.com/${owner}/${repo}`);
}

pushToGitHub().catch(console.error);
