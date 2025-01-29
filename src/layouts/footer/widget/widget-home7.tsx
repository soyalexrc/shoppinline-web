import WidgetLink from './widget-link';
import WidgetAbout from './widget-about-us';
import Container from '@components/ui/container';
import { footer } from '../data';
import FeatureCarousel from '@components/common/featured-carousel';
import React from 'react';
import FeatureCarouselFive from '@components/common/featured-carousel-five';
import cn from 'classnames';
import WidgetSubscription from '@layouts/footer/widget/widget-subscription';

interface WidgetsProps {
  lang: string;
  variant?: string;
  showWidgetServices?: boolean;
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<WidgetsProps> = ({
  lang,
  widgets,
  showWidgetServices,
  variant = 'default',
}) => {
  const { social } = footer;
  return (
    <>
      {showWidgetServices && (
        <div className={'border-b border-white/10'}>
          <Container className="2xl:max-w-[1730px]">
            <FeatureCarousel lang={lang} variant={variant} className={'mb-0'} />
          </Container>
        </div>
      )}

      <Container className={cn({ '2xl:max-w-[1730px]': variant === 'home5' })}>
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 pb-14 pt-10 md:pt-14">
          <WidgetAbout
            social={social}
            className="col-span-full sm:col-span-1 md:col-span-4"
            lang={lang}
            variant={variant}
          />
          {widgets
            ?.slice(0, 2)
            ?.map((widget) => (
              <WidgetLink
                key={`footer-widget--key${widget.id}`}
                data={widget}
                className="col-span-1 md:col-span-2"
                variant={variant}
                lang={lang}
              />
            ))}
          <WidgetSubscription
            variant={variant}
            lang={lang}
            className={'col-span-full md:col-span-4'}
          />
        </div>
      </Container>
    </>
  );
};

export default Widgets;
