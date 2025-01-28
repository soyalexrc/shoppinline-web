

import CategoryDropdownSidebar from "@components/category/category-dropdown-sidebar";
import BestSellerSidebarProductFeed from '@components/product/feeds/best-seller-sidebar-product-feed';

import {FC} from "react";
interface blogGridProps {
    lang: string
}
export const BlogSidebar: FC<blogGridProps> = ({lang}) => {
  return (
    <div className="space-y-5">
      <CategoryDropdownSidebar lang={lang} />
      <BestSellerSidebarProductFeed lang={lang} />
    </div>
  );
};
