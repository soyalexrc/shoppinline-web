"use client";
import { useState, useTransition, useRef } from 'react';
import { LIMITS } from '@framework/utils/limits';
import {FC} from "react";
import cn from "classnames";
import { useBestSellerProductsQuery } from '@framework/product/get-all-best-seller-products';
import ProductsCarousel from '@components/product/products-carousel';
import {Product} from "@framework/types";


type BoxProps = {
    className?: string;
    lang: string;
    variant?: string;
};

 // Define the tabs data array with component references
 const tabsData = [
    { id: 'featured', title: 'Featured' },
    { id: 'topTrending', title: 'Top Trending' },
    { id: 'onSale', title: 'On Sale'  },
];

const ListingtabsFeatured: FC<BoxProps> = ({
    lang,
    className,
    variant,
}) => {
    const { data: products, isLoading, error } = useBestSellerProductsQuery({
        limit: LIMITS.BEST_SELLER_PRODUCTS_LIMITS,
    });
   
    const [activeTab, setActiveTab] = useState(tabsData[0].id); // Set default active tab
    const [isPending, startTransition] = useTransition();

    const handleTabClick = (tabId: any ) => {
        startTransition(() => {
          setActiveTab(tabId);
        });
    };

    // Filter products based on the active tab
    const filteredProducts = () => {
        switch (activeTab) {
            case 'featured':
                return products?.filter(product => product.isFeatured); // Assuming `isFeatured` is a boolean
            case 'topTrending':
                return products?.sort((a: Product , b: Product) => b.rating - a.rating); // Assuming rating filter
            case 'onSale':
                return products?.filter(product => product.discountPercentage > 0); // Assuming discount filter
            default:
                return products;
        }
    };
    
     // Get the active tab data
     const displayProducts = filteredProducts();

    return (
      <div className={cn('my-8 lg:my-15', className)}
      >
        {/* Tabs Navigation */}  
        <div className={"flex gap-7 pb-4 tab-products"}>
            {tabsData.map((tab) => (
            <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`${ activeTab === tab.id ? "text-fill-base" : "text-gray-400"} 
                text-base lg:text-[16px] lg:leading-6 font-bold uppercase relative`}
            >
                {tab.title}
            </button>
            ))}
        </div>
        {/* Displaying content based on activeTab */}
        <div className={" gap-7 tab-products"}>
        
            {isPending ? (
                <div className="flex justify-center items-center min-h-[300px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                </div>
            ) : (
                <ProductsCarousel
                products={displayProducts ?? []}
                loading={isLoading}
                error={error?.message}
                limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
                uniqueKey={activeTab}
                lang={lang}
                variant={variant}
                className={className}
                />
            )}
        </div>
        
      </div>
  );
}
export default ListingtabsFeatured;
