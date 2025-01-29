import Container from '@components/ui/container';
import { Metadata } from 'next';
import HeroSliderBlock from '@components/hero/hero-slider-block';

import {
  homeEightHeroSlider as heroSlider,
  homeEightGridHero as gridHero,
  homeEightGridHero2 as gridHero2,
} from '@framework/static/banner';

import BannerGrid from '@components/common/banner-grid';
import CollectionLight from '@components/common/collection-light';
import ThisWeekBestProduct from '@components/product/feeds/this-week-best-product';
import TrendingProductFeed from '@components/product/feeds/trending-product-feed';
import SectionHeader from '@components/common/section-header';
import LatestblogCarousel from '@components/common/latestblog-carousel';
// import cn from 'classnames';
import React from 'react';

export const metadata: Metadata = {
  title: 'Furniture Store - Home 3',
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
      <div className="mb-8 lg:mb-24">
        <HeroSliderBlock
          heroBanner={heroSlider}
          showHeroContent={true}
          variant={`slider-8`}
          contentClassName="p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 min-h-[270px] md:min-h-[470px] xl:min-h-[980px] rounded"
          lang={lang}
        />
      </div>

      <Container>
        <BannerGrid
          lang={lang}
          data={gridHero}
          grid={3}
          className="mb-8 lg:mb-24"
        />
      </Container>

      <div className={'bg-[#f5f5f5] py-8 lg:py-24  mb-12 lg:mb-24 '}>
        <Container>
          <CollectionLight
            lang={lang}
            className="mb-0"
            headingPosition={'center-xl'}
          />
        </Container>
      </div>

      <Container>
        <ThisWeekBestProduct
          lang={lang}
          variant={'furniture-3'}
          className="mb-12 lg:mb-24"
        />
        <BannerGrid
          lang={lang}
          data={gridHero2}
          grid={3}
          className="mb-12 lg:mb-24"
        />

        <TrendingProductFeed
          lang={lang}
          className="mb-12 lg:mb-24"
          variant={'furniture-3'}
        />

        <SectionHeader
          sectionHeading="text-latestblog"
          sectionSubHeading="text-subheading"
          headingPosition={'center-xl'}
          lang={lang}
        />
        <LatestblogCarousel
          lang={lang}
          className={'mb-8 lg:mb-15'}
          variant={'home8'}
        />
      </Container>
    </>
  );
}
