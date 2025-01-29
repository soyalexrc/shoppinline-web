'use client';
import ProductsCarousel from '@components/product/products-carousel';
import { ROUTES } from '@utils/routes';
import { LIMITS } from '@framework/utils/limits';
import { FC } from 'react';
import { usefashionProductsQuery } from '@framework/product/get-all-fashion-products';

interface Props {
  lang: string;
  className: string;
  variant: string;
}

const FashionProductFeed: FC<Props> = ({ lang, className, variant }) => {
  const {
    data: Products = [],
    isLoading,
    error,
  } = usefashionProductsQuery({
    limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
  });
  return (
    <ProductsCarousel
      sectionHeading="text-popcorn-jerky"
      products={Products}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.ELETRONIC_PRODUCTS_LIMITS}
      uniqueKey="elec-jerky"
      lang={lang}
      variant={variant}
      className={className}
    />
  );
};
export default FashionProductFeed;
