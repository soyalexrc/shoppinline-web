'use client';
import { LIMITS } from '@framework/utils/limits';
import ListingTabsList from '@components/product/listingtabs/listingtabs-list';
import ListingTabsContainer from '@components/product/listingtabs/listingtabs-container-topsell';
import { useElectronicProductsQuery } from '@framework/product/get-all-electronic-products';
import { useElectronicCategoryQuery } from '@framework/product/get-electronic-category';
import { useState, useTransition } from 'react';
import CollectionFeatured from '@components/common/collection-featured';

interface Props {
  lang: string;
  colSiderbar?: boolean;
  variant?: string | undefined;
}
const ListingTabsTopSell: React.FC<Props> = ({
  colSiderbar,
  variant = 'default',
  lang,
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isPending, startTransition] = useTransition();

  const { data: categories } = useElectronicCategoryQuery({
    limit: LIMITS.ELETRONIC_PRODUCTS_LIMITS,
  });

  const { data: products, isLoading, error } = useElectronicProductsQuery({});

  const handleTabClick = (category: number) => {
    startTransition(() => {
      setActiveTab(category);
    });
  };

  return (
    <div className="mb-8 lg:mb-15">
      <div className="listing-tabs">
        <ListingTabsList
          lang={lang}
          className={` py-2.5 rounded  ltabs-heading`}
          data={categories}
          onNavClick={handleTabClick}
          activeTab={activeTab}
        />
        {isPending ? (
          <div className="flex justify-center items-center min-h-[400px] bg-white">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <ListingTabsContainer
            lang={lang}
            data={products}
            isLoading={isLoading}
            error={error}
            variant={variant}
          />
        )}
      </div>
    </div>
  );
};
export default ListingTabsTopSell;
