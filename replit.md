# Spacetoon Toys

## Overview

Spacetoon Toys is a bilingual (English/Arabic) e-commerce landing page for a toy store in Syria. The application features a playful "Team Lilia vs Team Adam" theme where two children curate toy selections. The site includes a split-screen hero section, live score tracking, product catalog with category tabs, and full RTL (right-to-left) support for Arabic language.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state, React Context for language/localization
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **API Pattern**: RESTful endpoints under `/api/*`
- **Server**: Single HTTP server serving both API and static files
- **Development**: Vite dev server with HMR integration

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Current Storage**: In-memory storage (`MemStorage` class) with seeded product data
- **Database Ready**: PostgreSQL configuration exists in `drizzle.config.ts`

### Key Design Patterns

1. **Shared Schema**: Types and schemas defined in `shared/` directory are used by both client and server, ensuring type safety across the stack.

2. **Bilingual Support**: 
   - Language context (`LanguageContext`) manages English/Arabic translations
   - RTL layout handled via CSS logical properties and document direction switching
   - Translations stored in shared schema

3. **Component Structure**:
   - Feature components in `client/src/components/` (hero, navbar, product tabs, etc.)
   - Reusable UI primitives in `client/src/components/ui/` (shadcn/ui)

4. **API Design**:
   - Products endpoint: `GET /api/products`
   - Category filter: `GET /api/products/category/:category`
   - Single product: `GET /api/products/:id`

### Project Structure
```
├── client/           # React frontend
│   ├── src/
│   │   ├── components/   # Feature + UI components
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities, context, query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   └── storage.ts    # Data storage layer
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema + TypeScript types
└── migrations/       # Database migrations (Drizzle Kit)
```

## External Dependencies

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations with `npm run db:push`

### Key NPM Packages
- `drizzle-orm` / `drizzle-zod`: Database ORM and Zod schema generation
- `@tanstack/react-query`: Async state management
- `wouter`: Client-side routing
- `react-icons`: Social media icons (WhatsApp, Instagram, Facebook)
- `lucide-react`: Icon library for UI elements

### Development Tools
- `vite`: Build tool and dev server
- `tsx`: TypeScript execution for server
- `tailwindcss`: Utility-first CSS framework

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling
- `@replit/vite-plugin-dev-banner`: Development banner