import { useRoute, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useLanguage } from '@/lib/language-context';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Ribbon, Car, PartyPopper, GraduationCap } from 'lucide-react';
import type { Product } from '@shared/schema';

const collectionInfo: Record<string, { 
  icon: typeof Ribbon; 
  colorClass: string;
  bgClass: string;
  nameEn: string;
  nameAr: string;
}> = {
  lilia: {
    icon: Ribbon,
    colorClass: 'text-lilia',
    bgClass: 'bg-lilia/10',
    nameEn: 'Team Lilia',
    nameAr: 'فريق ليليا',
  },
  adam: {
    icon: Car,
    colorClass: 'text-adam',
    bgClass: 'bg-adam/10',
    nameEn: 'Team Adam',
    nameAr: 'فريق آدم',
  },
  party: {
    icon: PartyPopper,
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-50',
    nameEn: 'Party Time',
    nameAr: 'وقت الحفلة',
  },
  khalou: {
    icon: GraduationCap,
    colorClass: 'text-gray-800',
    bgClass: 'bg-gray-100',
    nameEn: "Khalou's Picks",
    nameAr: 'توصيات خالو',
  },
};

export default function CollectionPage() {
  const [, params] = useRoute('/collection/:category');
  const category = params?.category || 'lilia';
  const { isRTL } = useLanguage();

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  const categoryProducts = products?.filter(p => p.category === category) || [];
  const info = collectionInfo[category] || collectionInfo.lilia;
  const Icon = info.icon;

  const getAccentColor = (cat: string): 'lilia' | 'adam' | 'default' => {
    if (cat === 'lilia') return 'lilia';
    if (cat === 'adam') return 'adam';
    return 'default';
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back-home">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
            </Button>
          </Link>

          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${info.bgClass}`}>
            <Icon className={`w-8 h-8 ${info.colorClass}`} />
            <h1 className={`text-2xl md:text-3xl font-bold ${info.colorClass}`} data-testid="text-collection-title">
              {isRTL ? info.nameAr : info.nameEn}
            </h1>
          </div>

          <p className="text-muted-foreground mt-4" data-testid="text-product-count">
            {isRTL 
              ? `${categoryProducts.length} منتج` 
              : `${categoryProducts.length} products`}
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : categoryProducts.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground" data-testid="text-no-products">
            {isRTL ? 'لا توجد منتجات متاحة حالياً' : 'No products available'}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categoryProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                accentColor={getAccentColor(category)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
