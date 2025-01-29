import Container from '@components/ui/container';
import { Metadata } from 'next';
import HeroSliderBlock from '@components/hero/hero-slider-block';

import { homeFiveHeroSlider as heroSlider } from '@framework/static/banner';
import InstagramGrid from '@components/common/instagram';
import ThisWeekProductFeed from '@components/product/feeds/this-week-top-product';
import CollectionOffers from '@components/common/collection-deal';
import SuppercategoryPopular from '@components/product/feeds/suppercategory-popular';
import LatestblogCarousel from '@components/common/latestblog-carousel';
import SectionHeader from '@components/common/section-header';

export const metadata: Metadata = {
  title: 'Furniture Store - Home 1',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
};

type Params = {
    lang: string
}

export default async function Page({ params }: { params: Params }) {
  const { lang } = await params;
  return (
    <>
      <div className="mb-8 lg:mb-15">
        <HeroSliderBlock
          heroBanner={heroSlider}
          showHeroContent={true}
          variant={`slider-5`}
          contentClassName="p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 md:min-h-[370px] xl:min-h-[450px] "
          lang={lang}
        />
      </div>

      <div className={'border-b border-[#e5e8ec] mb-8 lg:mb-15 '}>
        <Container>
          <InstagramGrid lang={lang} className="mb-8 lg:mb-12" />
        </Container>
      </div>

      <Container>
        <ThisWeekProductFeed
          lang={lang}
          variant={'furniture'}
          className={'mb-8 lg:mb-15 pb-8 lg:pb-10'}
        />
        <CollectionOffers
          lang={lang}
          variant={'furniture'}
          className={'mb-8 lg:mb-15 pb-8 lg:pb-12'}
        />
        <SuppercategoryPopular lang={lang} className="mb-8 lg:mb-15" />
      </Container>

      <div className={'bg-skin-body py-8 lg:p-15'}>
        <Container>
          <SectionHeader
            sectionHeading="text-latestblog"
            sectionSubHeading="text-subheading"
            headingPosition={'center'}
            lang={lang}
          />
          <LatestblogCarousel lang={lang} variant={'home5'} />
        </Container>
      </div>
    </>
  );
}
