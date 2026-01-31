import { useLanguage } from '@/lib/language-context';
import { Trophy, Truck, BadgeCheck } from 'lucide-react';

export function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 bg-white" data-testid="section-stats">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-lilia/5 via-white to-adam/5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-gradient-to-r from-lilia-light/50 to-adam-light/50" data-testid="stat-score">
              <Trophy className="w-6 h-6 text-yellow-500 flex-shrink-0" />
              <span className="font-bold text-sm md:text-base text-center">
                {t.statsScore}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-green-50" data-testid="stat-delivery">
              <Truck className="w-6 h-6 text-green-600 flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base text-green-700">
                {t.statsDelivery}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-blue-50" data-testid="stat-approved">
              <BadgeCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <span className="font-semibold text-sm md:text-base text-blue-700">
                {t.statsApproved}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
