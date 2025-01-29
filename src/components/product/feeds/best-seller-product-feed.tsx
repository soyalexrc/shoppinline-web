'use client';

import ProductsCarousel from '@components/product/products-carousel';
import { useBestSellerProductsQuery } from '@framework/product/get-all-best-seller-products';
import { LIMITS } from '@framework/utils/limits';
import { ROUTES } from '@utils/routes';
import { FC } from 'react';
import { Product } from '@framework/types';
interface Props {
  lang: string;
  className?: string;
  variant?: string;
}
const BestSellerProductFeed: FC<Props> = ({ lang, className, variant }) => {
  const {
    data: Product = [],
    isLoading,
    error,
  } = useBestSellerProductsQuery({
    limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
  });

  return (
    <ProductsCarousel
      sectionHeading="text-best-sellers"
      products={Product}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
      uniqueKey="best-sellers"
      lang={lang}
      variant={variant}
      className={className}
    />
  );
};
export default BestSellerProductFeed;
