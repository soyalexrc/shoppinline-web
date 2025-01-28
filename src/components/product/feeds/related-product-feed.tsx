'use client';

import ProductsCarousel from '@components/product/products-carousel';
import { useRelatedProductsQuery } from '@framework/product/get-related-product';
import { LIMITS } from '@framework/utils/limits';
import {Product} from '@framework/types';

interface RelatedProductsProps {
  lang: string;
  carouselBreakpoint?: {} | any;
  className?: string;
  uniqueKey?: string;
}

const RelatedProductFeed: React.FC<RelatedProductsProps> = ({
  lang,
  carouselBreakpoint,
  className,
  uniqueKey = 'related-product-popup',
}) => {
  const { data: Product=[], isLoading, error } = useRelatedProductsQuery({
    limit: LIMITS.RELATED_PRODUCTS_LIMITS,
  });
  return (
    <ProductsCarousel
      sectionHeading="text-related-products"
      className={className}
      products={Product}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.RELATED_PRODUCTS_LIMITS}
      uniqueKey={uniqueKey}
      carouselBreakpoint={carouselBreakpoint}
      lang={lang}
    />
  );
};

export default RelatedProductFeed;
