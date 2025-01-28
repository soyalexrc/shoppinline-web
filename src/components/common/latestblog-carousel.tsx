'use client';
import LatestblogCard from '@components/cards/latestblog-card';
import SectionHeader from '@components/common/section-header';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {ROUTES} from '@utils/routes';
import {useBlogsQuery} from '@framework/blog/get-all-blogs';
import ProductCardLoader from "@components/ui/loaders/product-card-loader";
import React from "react";
import cn from "classnames";
import {LIMITS} from "@framework/utils/limits";

interface Props {
    className?: string;
    lang: string;
    headingPosition?: 'left' | 'center';
    variant?: string;
}
let breakpoints = {

    '1280': {
        slidesPerView: 4,
    },
    '1024': {
        slidesPerView: 3,
    },
    '768': {
        slidesPerView: 2,
    },
    '540': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 1,
    },
};
const LatestblogCarousel: React.FC<Props> = ({
                                         lang,
                                         className,
                                         headingPosition = 'left',
                                         variant='default'
                                     }) => {
    const {data, isLoading, error} = useBlogsQuery();
    const dataBlog = data?.blogs?.data;
    const {width} = useWindowSize();

    let spaceBetween= 5;
    if(variant ==='home3' || variant ==='home5' || variant =='home8')  spaceBetween = 30;
    if(variant =='home6') spaceBetween = 10;
    if(variant =='home7' ) spaceBetween = 20;

    if(variant =='home8'){
        breakpoints = {
            '1280': {
                slidesPerView: 3,
            },
            '1024': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '540': {
                slidesPerView: 2,
            },
            '0': {
                slidesPerView: 1,
            },
        };
    }
    return (
        <div className={cn('heightFull relative', className)}>
            <Carousel
                lang={lang}
                spaceBetween={spaceBetween}
                breakpoints={breakpoints}
                className=""
            >
                {isLoading && !dataBlog?.length ? (
                    Array.from({length: 6}).map((_, idx) => (
                        <SwiperSlide
                            key={`latestblog-${idx}`}
                            className="p-2 w-80 h-full rounded bg-white"
                        >
                            <ProductCardLoader uniqueKey={`latestblog-${idx}`}/>
                        </SwiperSlide>
                    ))
                ) : (
                    <>
                    {dataBlog?.map((item) => (
                        <SwiperSlide
                            key={`collection-key-${item.id}`}
                        >
                            <LatestblogCard
                                variant={variant}
                                lang={lang}
                                key={item.id}
                                collection={item}
                                href={`/${lang}${ROUTES.BLOG}/${item.slug}`}
                            />
                        </SwiperSlide>
                    ))}
                    </>
                )}
            </Carousel>
        </div>
    );
};

export default LatestblogCarousel;
