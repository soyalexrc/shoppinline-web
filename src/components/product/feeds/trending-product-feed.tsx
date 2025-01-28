'use client';

import type { FC } from 'react';
import ProductsCarousel from '@components/product/products-carousel';
import { LIMITS } from '@framework/utils/limits';
import { useTrendingProductsQuery } from '@framework/product/get-all-trending-products';

interface ProductFeedProps {
  lang: string;
  className?: string;
  variant?: string;
}

const TrendingProductFeed: FC<ProductFeedProps> = ({
  lang,
  className,
  variant,
}) => {
  const limit = LIMITS.POPULAR_PRODUCTS_LIMITS;
  const { data, isLoading, error } = useTrendingProductsQuery({
    limit: limit,
  });
    const breakpoints = {
        '1280': {
            slidesPerView: 4,
        },
        '1024': {
            slidesPerView: 4,
        },
        '640': {
            slidesPerView: 3,
        },
        '360': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    };

  return (
    <ProductsCarousel
      sectionHeading="text-popular-product"
      className={className}
      products={data ?? []}
      loading={isLoading}
      error={error?.message}
      limit={limit}
      uniqueKey="popular-product"
      variant={variant}
      carouselBreakpoint={breakpoints}
      lang={lang}
    />
  );
};

export default TrendingProductFeed;
