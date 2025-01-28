'use client';

import useWindowSize from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import {SwiperSlide} from '@components/ui/carousel/slider';
import {ROUTES} from '@utils/routes';
import BrandCard from '@components/cards/brand-card';

const data = [
    {
        id: 1,
        href: '#',
        image: '/assets/images/brand/brand_8_1.jpg',
        title: 'collection-title-one',
    },
    {
        id: 2,
        href: '#',
        image: '/assets/images/brand/brand_8_2.jpg',
        title: 'collection-title-two',
    },
    {
        id: 3,
        href: '#',
        image: '/assets/images/brand/brand_8_3.jpg',
        title: 'collection-title-three',
    },
    {
        id: 4,
        href: '#',
        image: '/assets/images/brand/brand_8_4.jpg',
        title: 'collection-title-four',
    },
    {
        id: 5,
        href: '#',
        image: '/assets/images/brand/brand_8_5.jpg',
        title: 'collection-title-five',
    },
    {
        id: 6,
        href: '#',
        image: '/assets/images/brand/brand_8_6.jpg',
        title: 'collection-title-five',
    }
];

interface Props {
    lang: string;
    className?: string;
    headingPosition?: 'left' | 'center';
}

const breakpoints = {
    '1040': {
        slidesPerView: 5,
    },
    '1024': {
        slidesPerView: 3,
    },
    '768': {
        slidesPerView: 3,
    },
    '540': {
        slidesPerView: 2,
    },
    '0': {
        slidesPerView: 2,
    },
};

const BrandCarousel: React.FC<Props> = ({
                                            className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
                                            headingPosition = 'center',
                                            lang,
                                        }) => {
    const {width} = useWindowSize();
    return (
        <div className={className}>

            {width! < 1536 ? (
                <Carousel
                    breakpoints={breakpoints}
                    prevActivateId="collection-carousel-button-prev"
                    nextActivateId="collection-carousel-button-next"
                    lang={lang}
                >
                    {data?.map((item) => (
                        <SwiperSlide
                            key={`collection-key-${item.id}`}
                        >
                            <BrandCard
                                key={item.id}
                                collection={item}
                                lang={lang}
                            />
                        </SwiperSlide>
                    ))}
                </Carousel>
            ) : (
                <div className="gap-5 2xl:grid 2xl:grid-cols-6 3xl:gap-5">
                    {data?.map((item) => (
                        <BrandCard
                            key={item.id}
                            collection={item}
                            lang={lang}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default BrandCarousel;
