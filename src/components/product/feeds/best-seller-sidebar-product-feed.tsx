'use client';

import ProductsListBlock from '@components/product/products-list-block';
import { useBestSellerProductsQuery } from '@framework/product/get-all-best-seller-products';
import { LIMITS } from '@framework/utils/limits';
import { Product } from '@framework/types';

export default function BestSellerSidebarProductFeed({
  lang,
}: {
  lang: string;
}) {
  const {
    data: Products = [],
    isLoading,
    error,
  } = useBestSellerProductsQuery({
    limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
  });

  return (
    <ProductsListBlock
      sectionHeading="text-best-sellers"
      products={Products}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
      uniqueKey="best-sellers"
      lang={lang}
      className={`bg-white rounded p-5 mb-8`}
    />
  );
}
