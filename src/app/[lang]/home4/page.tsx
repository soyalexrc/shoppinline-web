import { Metadata } from 'next';
import Container from '@components/ui/container';
import FeatureCarousel from '@components/common/featured-carousel';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import BannerGrid from '@components/common/banner-grid';

import {
  homeSixHeroSlider as heroSlider,
  homeSixGridHero2 as gridHero,
  homeGridHero2 as gridHero2,
} from '@framework/static/banner';

import LatestblogCarousel from '@components/common/latestblog-carousel';
import PopularProductFeed from '@components/product/feeds/popular-product-feed';

import ProductWithBestDeals from '@components/product/product-with-best-deals';
import ListingTabsTopSell from '@components/product/feeds/listingtabs-topsell';
import SectionHeader from '@components/common/section-header';
import Marquee from '@utils/marquee';
import BrandCarousel from '@components/common/brands-carousel';

export const metadata: Metadata = {
  title: 'Electronic Store - Home 4',
};

type Params = {
    lang: string
}

export default async function Page({ params }: { params: Params }) {
  const { lang } = await params;
  return (
    <>
      <div className="sm:mb-8 ">
        <HeroSliderBlock
          heroBanner={heroSlider}
          showHeroContent={true}
          variant={`slider-6`}
          contentClassName="p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 min-h-[270px] md:min-h-[350px] xl:min-h-[500px] "
          lang={lang}
        />
      </div>
      <Container>
        <FeatureCarousel lang={lang} className={'mb-8 '} variant={'home2'} />
        <BannerGrid
          lang={lang}
          data={gridHero2}
          girdClassName={'md:gap-3'}
          grid={3}
          className="mb-8 lg:mb-15"
        />
        <ProductWithBestDeals
          lang={lang}
          className={'navSlider'}
          showBanner={false}
          variant={'outBorder'}
        />
        <BannerGrid
          lang={lang}
          data={gridHero}
          grid={2}
          girdClassName={'md:gap-3'}
          className="mb-8 lg:mb-15"
        />
        <ListingTabsTopSell
          lang={lang}
          colSiderbar={false}
          variant={'outBorder'}
        />
      </Container>

      <div className={'bg-skin-body py-8 lg:py-15 lg:pt-12'}>
        <Container>
          <PopularProductFeed
            lang={lang}
            className="mb-0"
            variant={'outBorder'}
          />
        </Container>
      </div>

      <div className={'bg-[#263c97] p-4'}>
        <Container>
          <Marquee speed={30} className="text-base text-white ">
            <span>🌟 Uminex- Digital Store React NextJS Template</span>
            <span>
              🌟 Uminex is a creative digital Store NextJS Template build with
              NextJS 14 and Tailwindcss.
            </span>
            <span>
              🌟 You can send us email to support@ibigecommerce.com. We will
              process tickets and respond you to in the queue order.
            </span>
          </Marquee>
        </Container>
      </div>

      <div className={' py-8 lg:py-12'}>
        <Container>
          <SectionHeader
            sectionHeading="text-latestblog"
            className={'uppercase mb-3'}
            lang={lang}
          />
          <LatestblogCarousel lang={lang} className="mb-0 " variant={'home6'} />
        </Container>
      </div>

      <div className={'border-t border-black/10  py-4'}>
        <Container>
          <BrandCarousel lang={lang} className="mb-0" />
        </Container>
      </div>
    </>
  );
}
