import WishlistProductCard from '@components/product/wishlist-product-card';
import { useWishlistProductsQuery } from '@framework/product/get-wishlist-product';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import Alert from '@components/ui/alert';
import cn from 'classnames';

interface ProductWishlistProps {
  className?: string;
  lang: string;
}

export default function ProductWishlistGrid({
  className = '',
  lang,
}: ProductWishlistProps) {
  const limit = 35;
  const { data, isLoading, error } = useWishlistProductsQuery({
    limit: limit,
  });
  return (
    <div className={cn(className)}>
      {error ? (
        <Alert message={error?.message} />
      ) : (
        <div className="flex flex-col">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px] bg-white">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            data?.map((product: any) => (
              <WishlistProductCard
                key={`product--key${product.id}`}
                product={product}
                lang={lang}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
}
