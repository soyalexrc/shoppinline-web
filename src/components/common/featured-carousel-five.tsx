'use client';
// import LicenseIcon from '@components/icons/featured/license-icon';
// import FeedbackIcon from '@components/icons/featured/feedback-icon';

import FeaturedCard from '@components/cards/featured-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';
import DeliveryIcon from '@components/icons/featured/delivery-icon';
import CardIcon from '@components/icons/featured/card-icon';
import SupportIcon from '@components/icons/featured/support-icon';
import cn from 'classnames';

const data = [
  {
    id: 1,
    icon: <DeliveryIcon color="#ffffff" />,
    title: 'feature-title-one',
    description: 'feature-title-one-description',
    href: ROUTES.SEARCH,
  },
  {
    id: 2,
    icon: <CardIcon color="#ffffff" />,
    title: 'feature-title-two',
    description: 'feature-title-two-description',
    href: ROUTES.SEARCH,
  },
  {
    id: 3,
    icon: <SupportIcon color="#ffffff" />,
    title: 'feature-title-four',
    description: 'feature-title-four-description',
    href: ROUTES.SEARCH,
  },
];

interface Props {
  lang: string;
  className?: string;
  variant?: string;
}

const breakpoints = {
  '1024': {
    slidesPerView: 3,
  },
  '768': {
    slidesPerView: 2,
  },
  '640 ': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const FeatureCarouselFive: React.FC<Props> = ({
  lang,
  className = 'mb-8 md:mb-10 ',
  variant,
}) => {
  return (
    <div
      className={cn(
        'group',
        {
          'py-10 py:mb-12': variant === 'default',
          'border-b border-white/10 p-6  xl:py-8 ': variant === 'home5',
        },
        className,
      )}
    >
      <Carousel
        lang={lang}
        autoplay={false}
        breakpoints={breakpoints}
        prevActivateId="featured-carousel-button-prev"
        nextActivateId="featured-carousel-button-next"
      >
        {data?.map((item) => (
          <SwiperSlide key={`featured-key-${item.id}`}>
            <FeaturedCard item={item} lang={lang} variant={variant} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};
export default FeatureCarouselFive;
