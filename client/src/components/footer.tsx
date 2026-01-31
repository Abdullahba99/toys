import { useLanguage } from '@/lib/language-context';
import { Heart, MapPin } from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiFacebook, SiTiktok } from 'react-icons/si';
import { Link } from 'wouter';

export function Footer() {
  const { t, language, isRTL } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center md:text-start rtl:md:text-end">
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-2 mb-4">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <defs>
                  <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path stroke="url(#logoGradientFooter)" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              <span className="font-bold text-xl" data-testid="text-footer-brand">
                <span className="text-lilia">{language === 'ar' ? 'سبيستون' : 'Space'}</span>
                <span className="text-adam">{language === 'ar' ? ' تويز' : 'toon Toys'}</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm" data-testid="text-footer-tagline">
              {isRTL 
                ? 'أفضل ألعاب للأطفال في الكويت' 
                : 'The best toys for kids in Kuwait'}
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors" data-testid="link-footer-home">
                {t.navHome}
              </a>
              <a href="#inventory" className="text-gray-400 hover:text-white transition-colors" data-testid="link-footer-shop">
                {t.navShop}
              </a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors" data-testid="link-footer-about">
                {t.navAbout}
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4" data-testid="text-footer-policies-title">
              {t.policies}
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/return-policy" className="text-gray-400 hover:text-white transition-colors" data-testid="link-return-policy">
                {t.returnPolicy}
              </Link>
              <Link href="/exchange-policy" className="text-gray-400 hover:text-white transition-colors" data-testid="link-exchange-policy">
                {t.exchangePolicy}
              </Link>
            </div>
          </div>

          <div className="text-center md:text-end rtl:md:text-start">
            <h4 className="font-semibold mb-4" data-testid="text-footer-social-title">
              {isRTL ? 'تواصل معنا' : 'Connect with Us'}
            </h4>
            <div className="flex items-center justify-center md:justify-end rtl:md:justify-start gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-khalou flex items-center justify-center"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center"
                data-testid="link-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                data-testid="link-tiktok"
              >
                <SiTiktok className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
                data-testid="link-location"
              >
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2" data-testid="text-footer-copyright">
            <span>{t.footerText}</span>
            <Heart className="w-4 h-4 text-red-400 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
