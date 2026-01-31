import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';
import { Crown, Sparkles, Star, ChevronDown, User } from 'lucide-react';

interface HeroSectionProps {
  onSelectTeam: (team: 'lilia' | 'adam') => void;
}

export function HeroSection({ onSelectTeam }: HeroSectionProps) {
  const { t, isRTL } = useLanguage();

  const handleTeamClick = (team: 'lilia' | 'adam') => {
    onSelectTeam(team);
    const inventorySection = document.getElementById('inventory');
    if (inventorySection) {
      inventorySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 bg-gradient-to-b from-lilia-light/30 via-white to-adam-light/30" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12" data-testid="text-hero-headline">
          {t.heroHeadline}
        </h1>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div 
            className={`relative group ${isRTL ? 'md:order-2' : 'md:order-1'}`}
            data-testid="hero-lilia"
          >
            <div className="relative bg-gradient-to-br from-lilia-light to-white rounded-3xl p-6 md:p-8 border-2 border-lilia/20 shadow-xl transition-transform duration-300">
              <div className="absolute -top-4 inset-x-0 flex justify-center" data-testid="badge-team-lilia">
                <div className="bg-lilia text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-4 h-4" />
                  <span>Team Lilia</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center pt-4">
                <div className="relative w-40 h-40 md:w-52 md:h-52 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-lilia/30 to-lilia-light rounded-full animate-pulse-soft" />
                  <div className="absolute inset-2 bg-gradient-to-br from-lilia-light to-white rounded-full flex items-center justify-center">
                    <User className="w-20 h-20 md:w-24 md:h-24 text-lilia" />
                  </div>
                  <Sparkles className="absolute -top-2 end-0 w-8 h-8 text-lilia animate-bounce-soft" />
                  <Star className="absolute -bottom-1 start-0 w-6 h-6 text-yellow-400 animate-wiggle" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-lilia-dark mb-2" data-testid="text-lilia-name">Lilia</h2>
                <p className="text-muted-foreground mb-6 text-sm md:text-base" data-testid="text-lilia-subtitle">
                  {isRTL ? 'الأميرة الصغيرة بذوق راقي' : 'The little princess with refined taste'}
                </p>

                <Button 
                  onClick={() => handleTeamClick('lilia')}
                  className="bg-lilia text-white rounded-2xl px-6 py-6 text-lg font-semibold shadow-lg"
                  data-testid="button-shop-lilia"
                >
                  {t.liliaButton}
                  <ChevronDown className="w-5 h-5 ms-2" />
                </Button>
              </div>
            </div>
          </div>

          <div 
            className={`relative group ${isRTL ? 'md:order-1' : 'md:order-2'}`}
            data-testid="hero-adam"
          >
            <div className="relative bg-gradient-to-br from-adam-light to-white rounded-3xl p-6 md:p-8 border-2 border-adam/20 shadow-xl transition-transform duration-300">
              <div className="absolute -top-4 inset-x-0 flex justify-center" data-testid="badge-team-adam">
                <div className="bg-adam text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-4 h-4" />
                  <span>Team Adam</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center text-center pt-4">
                <div className="relative w-40 h-40 md:w-52 md:h-52 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-adam/30 to-adam-light rounded-full animate-pulse-soft" />
                  <div className="absolute inset-2 bg-gradient-to-br from-adam-light to-white rounded-full flex items-center justify-center">
                    <User className="w-20 h-20 md:w-24 md:h-24 text-adam" />
                  </div>
                  <Star className="absolute -top-2 end-0 w-8 h-8 text-adam animate-bounce-soft" />
                  <Sparkles className="absolute -bottom-1 start-0 w-6 h-6 text-yellow-400 animate-wiggle" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-adam-dark mb-2" data-testid="text-adam-name">Adam</h2>
                <p className="text-muted-foreground mb-6 text-sm md:text-base" data-testid="text-adam-subtitle">
                  {isRTL ? 'البطل الصغير مع أسلوب رائع' : 'The little hero with awesome style'}
                </p>

                <Button 
                  onClick={() => handleTeamClick('adam')}
                  className="bg-adam text-white rounded-2xl px-6 py-6 text-lg font-semibold shadow-lg"
                  data-testid="button-shop-adam"
                >
                  {t.adamButton}
                  <ChevronDown className="w-5 h-5 ms-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-xl shadow-xl border-4 border-white animate-bounce-soft" data-testid="badge-vs">
            VS
          </div>
        </div>
      </div>
    </section>
  );
}
