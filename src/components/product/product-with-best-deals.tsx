"use client";
import {usePopularProductsQuery} from '@framework/product/get-all-popular-products';
import SectionHeader from '@components/common/section-header';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import {LIMITS} from '@framework/utils/limits';
import Alert from '@components/ui/alert';
import Image from '@components/ui/image';
import ProductFlashSellCard from '@components/product/product-cards/product-flash-sell-card';
import { useTranslation } from 'src/app/i18n/client';
import Carousel from "@components/ui/carousel/carousel";
import {SwiperSlide} from "@components/ui/carousel/slider";
import React from "react";
import Countdown, {zeroPad} from 'react-countdown';
import ClockIcon from '@components/icons/clock-icon';
import cn from 'classnames';
import useWindowSize from '@utils/use-window-size';

interface ProductFeedProps {
    lang: string;
    className?: string;
    uniqueKey?: string;
    showBanner?: boolean;
    variant?: string;
}
let breakpoints = {};
let spaceBetween = 6;
const backgroundThumbnail = '/assets/images/banner/home1/hotdeals.png' ;

const ProductWithBestDeals: React.FC<ProductFeedProps> = ({lang,className = '',uniqueKey,showBanner= true,variant }) => {
    const limit = LIMITS.POPULAR_PRODUCTS_TWO_LIMITS;
    const {t} = useTranslation(lang, 'common');
    const {data, isLoading, error} = usePopularProductsQuery({
        limit: limit,
    });

    if (showBanner) {
        breakpoints = {
            '1280': {
                slidesPerView: 4,
            },
            '1024': {
                slidesPerView: 3,
            },
            '640': {
                slidesPerView: 3,
            },
            '0': {
                slidesPerView: 2,
            },
        };
    } else {
         breakpoints = {
            '1536': {
                slidesPerView: 6,
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
    const {width} = useWindowSize();
    if(variant =='outBorder') spaceBetween = 10;
    if(variant =='outBorder-xl') {
        width! < 1536  ?  spaceBetween = 10 : spaceBetween = 20;
    }

    return (
        <div className={`mb-12 lg:mb-15 ${className}`}>
            <div className={cn('md:flex justify-between mb-1.5  py-2.5 rounded ',
                showBanner && 'bg-white px-5'
                )}>
                <div className='flex items-center gap-2'>
                    <ClockIcon opacity="1" />
                    <SectionHeader lang={lang} headingPosition="hotdeal" sectionHeading="text-deals-of-the-week" sectionSubHeading="text-deals-subheading" className="flex gap-2 items-center uppercase"/>
                </div>

                <div className='flex items-center gap-2'>
                    <h2 className="text-skin-base  text-[14px]"> {t('text-offer-end')}</h2>
                    <Countdown date={Date.now() + 4000000 * 60} intervalDelay={1000} renderer={renderer}/>
                </div>

            </div>
            {error ? (
                <Alert message={error?.message} className="col-span-full" />
            ) : (
                <div className="xl:flex gap-1 relative heightFull">
                    {showBanner &&  (
                        <div className={`xl:max-w-[466px] relative overflow-hidden flex items-center`} >
                            <Image
                                src={backgroundThumbnail}
                                alt={'Product Image'}
                                width={465}
                                height={395}
                            />
                       </div>
                   )}

            <div className={cn(
                showBanner
                    ? 'trendy-main-content'
                    : 'main-content w-full',
            )}>
                <Carousel
                    breakpoints={breakpoints}
                    spaceBetween={spaceBetween}
                    prevActivateId={`prevBestdeals`}
                    nextActivateId={`nextBestdeals`}
                >
                                {isLoading && !data || data == undefined ? (
                                    Array.from({length: limit!}).map((_, idx) => (
                                        <SwiperSlide
                                            key={`bestdeals-${idx}`}
                                            className="p-2 w-60 h-full rounded bg-white"
                                        >
                                            <ProductCardLoader key={`bestdeals-${idx}`} uniqueKey={`bestdeals-${idx}`}/>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <>
                                        {data?.slice(0, limit).map((product: any, idx) => (
                                            <SwiperSlide key={`${uniqueKey}-${idx}`}>
                                                <ProductFlashSellCard
                                                    lang={lang}
                                                    variant={variant}
                                                    key={`popular-product-${product.id}`} product={product} date={Date.now() + 4000000 * 60}/>
                                            </SwiperSlide>
                                        ))}

                                    </>
                                )}
                            </Carousel>
                        </div>
                    </div>
            )}

        </div>
    );
};
const renderer = ({days, hours, minutes, seconds, completed}: any) => {
    if (completed) {
        return null;
    } else {
        return (
            <div
                className="flex text-[14px] font-semibold gap-2">
                <span
                    className="flex items-center justify-center min-w-[40px] md:min-w-[45px] min-h-[30px] md:min-h-[30px] bg-red-600 text-white rounded p-1">
                  {zeroPad(days)}
                </span>
                <span
                    className="flex items-center justify-center min-w-[40px] md:min-w-[45px] min-h-[30px] md:min-h-[30px] bg-red-600 text-white rounded p-1">
                {zeroPad(hours)}
                </span>
                <span
                    className="flex items-center justify-center min-w-[40px] md:min-w-[45px] min-h-[30px] md:min-h-[30px] bg-red-600 text-white rounded p-1">
                {zeroPad(minutes)}
                </span>
                <span
                    className="flex items-center justify-center min-w-[40px] md:min-w-[45px] min-h-[30px] md:min-h-[30px] bg-red-600 text-white rounded p-1">
                {zeroPad(seconds)}
                </span>
            </div>
        );
    }
};
export default ProductWithBestDeals;
