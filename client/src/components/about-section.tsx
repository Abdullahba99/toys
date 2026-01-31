import { useLanguage } from '@/lib/language-context';
import { Heart, Star, User } from 'lucide-react';

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-20 bg-white" data-testid="section-about">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
          <div className="absolute -top-6 inset-x-0 flex justify-center">
            <div className="bg-gradient-to-r from-lilia to-adam text-white px-6 py-2 rounded-full font-bold shadow-lg" data-testid="badge-about">
              {isRTL ? 'عنا' : 'About Us'}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
            <div className="relative flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-khalou-light to-khalou/20 flex items-center justify-center shadow-inner border-2 border-khalou/30">
                <User className="w-16 h-16 md:w-20 md:h-20 text-khalou" />
              </div>
              <Heart className="absolute -top-2 end-0 w-8 h-8 text-red-400 animate-pulse-soft" />
              <Star className="absolute -bottom-1 start-0 w-6 h-6 text-yellow-400" />
            </div>

            <div className="flex-1 text-center md:text-start rtl:md:text-end">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground" data-testid="text-khalou-name">
                {isRTL ? 'خالو محمود' : 'Khalou Mahmoud'}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed" data-testid="text-about">
                {t.aboutText}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-lilia-light/50 px-4 py-2 rounded-full" data-testid="badge-lilia-small">
                <User className="w-5 h-5 text-lilia" />
                <span className="font-semibold text-lilia-dark">Lilia</span>
              </div>
              <Heart className="w-6 h-6 text-red-400" />
              <div className="flex items-center gap-2 bg-adam-light/50 px-4 py-2 rounded-full" data-testid="badge-adam-small">
                <User className="w-5 h-5 text-adam" />
                <span className="font-semibold text-adam-dark">Adam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
