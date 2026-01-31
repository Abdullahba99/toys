import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { Globe, ShoppingCart } from 'lucide-react';

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border" data-testid="nav-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="logoGradientNav" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <path stroke="url(#logoGradientNav)" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              <path stroke="#ec4899" d="M5 3v4"/><path stroke="#ec4899" d="M3 5h4"/>
              <path stroke="#3b82f6" d="M19 17v4"/><path stroke="#3b82f6" d="M17 19h4"/>
            </svg>
            <span className="font-bold text-xl tracking-tight" data-testid="text-nav-brand">
              <span className="text-lilia">{language === 'ar' ? 'سبيستون' : 'Space'}</span>
              <span className="text-[#2e73a6]">{language === 'ar' ? ' تويز' : 'toon Toys'}</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#home" 
              className="text-sm font-medium text-muted-foreground"
              data-testid="link-nav-home"
            >
              {t.navHome}
            </a>
            <a 
              href="#inventory" 
              className="text-sm font-medium text-muted-foreground"
              data-testid="link-nav-shop"
            >
              {t.navShop}
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-muted-foreground"
              data-testid="link-nav-about"
            >
              {t.navAbout}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="relative"
            >
              <Globe className="w-5 h-5" />
              <span className="absolute -bottom-0.5 -right-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded px-1" data-testid="text-current-language">
                {language.toUpperCase()}
              </span>
            </Button>
            <Button variant="outline" size="icon" data-testid="button-cart">
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
