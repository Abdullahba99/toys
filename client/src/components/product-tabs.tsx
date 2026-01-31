import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from './product-card';
import { useLanguage } from '@/lib/language-context';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import { Ribbon, Car, PartyPopper, GraduationCap } from 'lucide-react';
import type { Product } from '@shared/schema';

interface ProductTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function ProductTabs({ activeTab, onTabChange }: ProductTabsProps) {
  const { t, isRTL } = useLanguage();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const filterProducts = (category: string) => {
    if (!products) return [];
    return products.filter(p => p.category === category);
  };

  const getAccentColor = (category: string): 'lilia' | 'adam' | 'default' => {
    if (category === 'lilia') return 'lilia';
    if (category === 'adam') return 'adam';
    return 'default';
  };

  const renderProducts = (category: string) => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <Skeleton className="aspect-square w-full" />
              <div className="p-4 space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      );
    }

    const categoryProducts = filterProducts(category);
    
    if (categoryProducts.length === 0) {
      return (
        <div className="text-center py-12 text-muted-foreground" data-testid="text-no-products">
          {isRTL ? 'لا توجد منتجات متاحة حالياً' : 'No products available'}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categoryProducts.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            accentColor={getAccentColor(category)}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="inventory" className="py-12 md:py-16 bg-gray-50/50 scroll-mt-20" data-testid="section-inventory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" data-testid="text-inventory-title">
          {isRTL ? 'تسوق حسب الفريق' : 'Shop by Team'}
        </h2>

        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl mx-auto mb-8 h-auto p-1 bg-white rounded-2xl shadow-sm">
            <TabsTrigger 
              value="lilia" 
              className="rounded-xl py-3 data-[state=active]:bg-lilia data-[state=active]:text-white font-semibold transition-all flex items-center justify-center gap-2"
              data-testid="tab-lilia"
            >
              <Ribbon className="w-4 h-4" />
              <span>{t.tabLilia}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="adam" 
              className="rounded-xl py-3 data-[state=active]:bg-adam data-[state=active]:text-white font-semibold transition-all flex items-center justify-center gap-2"
              data-testid="tab-adam"
            >
              <Car className="w-4 h-4" />
              <span>{t.tabAdam}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="party" 
              className="rounded-xl py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-400 data-[state=active]:text-white font-semibold transition-all flex items-center justify-center gap-2"
              data-testid="tab-party"
            >
              <PartyPopper className="w-4 h-4" />
              <span>{t.tabParty}</span>
            </TabsTrigger>
            <TabsTrigger 
              value="khalou" 
              className="rounded-xl py-3 data-[state=active]:bg-gray-800 data-[state=active]:text-white font-semibold transition-all flex items-center justify-center gap-2"
              data-testid="tab-khalou"
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.tabKhalou}</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lilia" className="mt-0" data-testid="content-lilia">
            {renderProducts('lilia')}
          </TabsContent>
          <TabsContent value="adam" className="mt-0" data-testid="content-adam">
            {renderProducts('adam')}
          </TabsContent>
          <TabsContent value="party" className="mt-0" data-testid="content-party">
            {renderProducts('party')}
          </TabsContent>
          <TabsContent value="khalou" className="mt-0" data-testid="content-khalou">
            {renderProducts('khalou')}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
