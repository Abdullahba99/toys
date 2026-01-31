import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/language-context';
import { ShoppingCart } from 'lucide-react';
import { ProductIcon } from './product-icon';
import type { Product } from '@shared/schema';

interface ProductCardProps {
  product: Product;
  accentColor?: 'lilia' | 'adam' | 'party' | 'khalou';
}

export function ProductCard({ product, accentColor = 'lilia' }: ProductCardProps) {
  const { t, language, isRTL } = useLanguage();
  
  const name = language === 'ar' ? product.nameAr : product.name;
  
  const getBorderColor = () => {
    switch (accentColor) {
      case 'lilia': return 'border-lilia/20';
      case 'adam': return 'border-adam/20';
      case 'party': return 'border-party/20';
      case 'khalou': return 'border-khalou/20';
      default: return 'border-lilia/20';
    }
  };

  const getIconColor = () => {
    switch (accentColor) {
      case 'lilia': return 'text-lilia';
      case 'adam': return 'text-adam';
      case 'party': return 'text-party';
      case 'khalou': return 'text-khalou';
      default: return 'text-lilia';
    }
  };

  return (
    <Card 
      className={`group overflow-hidden rounded-2xl border-2 ${getBorderColor()} transition-all duration-300`}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <ProductIcon iconName={product.iconName} className={`w-16 h-16 ${getIconColor()}`} />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-white text-black font-semibold" data-testid={`badge-out-of-stock-${product.id}`}>
              {isRTL ? 'نفذ المخزون' : 'Out of Stock'}
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-base mb-1 line-clamp-1" data-testid={`text-product-name-${product.id}`}>
          {name}
        </h3>
        <div className="flex items-center justify-between gap-2 mt-3">
          <span className="font-bold text-lg" data-testid={`text-product-price-${product.id}`}>
            {product.price.toLocaleString()} {t.currency}
          </span>
          <Button 
            size="sm"
            disabled={!product.inStock}
            className="rounded-xl"
            data-testid={`button-add-cart-${product.id}`}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
