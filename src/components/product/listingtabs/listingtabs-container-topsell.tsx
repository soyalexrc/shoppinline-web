"use client";
import ProductsCarousel from '@components/product/products-carousel';

interface Props {
  lang: string;
  data: any;
  isLoading: any;
  error?: any;
  variant: string;
}
const ListingTabsContainer: React.FC<Props> = ({
  lang,
  data,
  isLoading,
  error,
  variant,
}) => {
    let breakpoints = {
    '1536': {
      slidesPerView: 6,
    },
    '1280': {
      slidesPerView: 5,
    },
    '1024': {
      slidesPerView: 3,
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

    if(variant =='outBorder-xl'){
        breakpoints = {
            '1536': {
                slidesPerView: 7,
            },
            '1280': {
                slidesPerView: 5,
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
    }

  return (
    <ProductsCarousel
      lang={lang}
      sectionHeading=""
      products={data}
      loading={isLoading}
      error={error?.message}
      uniqueKey="electronic"
      variant={variant}
      carouselBreakpoint={breakpoints}
    />
  );
};
export default ListingTabsContainer;
