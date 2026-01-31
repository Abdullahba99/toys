import { useLanguage } from '@/lib/language-context';
import { Sparkles, Heart } from 'lucide-react';
import { SiWhatsapp, SiInstagram, SiFacebook } from 'react-icons/si';

export function Footer() {
  const { t, language, isRTL } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-start rtl:md:text-end">
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-end gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-lilia" />
              <span className="font-bold text-xl" data-testid="text-footer-brand">
                {language === 'ar' ? 'سبيستون تويز' : 'Spacetoon Toys'}
              </span>
            </div>
            <p className="text-gray-400 text-sm" data-testid="text-footer-tagline">
              {isRTL 
                ? 'أفضل ألعاب للأطفال في سوريا' 
                : 'The best toys for kids in Syria'}
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4" data-testid="text-footer-links-title">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400" data-testid="link-footer-home">
                {t.navHome}
              </a>
              <a href="#inventory" className="text-gray-400" data-testid="link-footer-shop">
                {t.navShop}
              </a>
              <a href="#about" className="text-gray-400" data-testid="link-footer-about">
                {t.navAbout}
              </a>
            </div>
          </div>

          <div className="text-center md:text-end rtl:md:text-start">
            <h4 className="font-semibold mb-4" data-testid="text-footer-social-title">
              {isRTL ? 'تواصل معنا' : 'Connect with Us'}
            </h4>
            <div className="flex items-center justify-center md:justify-end rtl:md:justify-start gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center"
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
