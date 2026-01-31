import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { Globe, ShoppingCart, Sparkles } from 'lucide-react';

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border" data-testid="nav-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-lilia" />
            <span className="font-bold text-xl tracking-tight" data-testid="text-nav-brand">
              {language === 'ar' ? 'سبيستون تويز' : 'Spacetoon Toys'}
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
