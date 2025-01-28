'use client';
import type { FC } from 'react';
import { QueryOptionsType, Product } from '@framework/types';

import { useThisWeekProductsQuery } from '@framework/product/get-all-this-week-products';
import ProductsCarousel from '@components/product/products-carousel';;
import { LIMITS } from '@framework/utils/limits';

interface ProductFeedProps {
    lang: string;
    className?: string;
    variant?: string;
}

const ThisWeekBestProduct: FC<ProductFeedProps> = ({
                                                         lang,
                                                         className,
                                                         variant,
                                                     }) => {
    const { data: Product=[], isLoading, error } = useThisWeekProductsQuery({
        limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
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
        sectionHeading="text-best-products"
        products={Product}
        loading={isLoading}
        error={error?.message}
        limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
        uniqueKey="best-sellers"
        className={className}
        carouselBreakpoint={breakpoints}
        variant={variant}
        lang={lang}
        rowCarousel={2}
      />
    );
};
export default ThisWeekBestProduct;
