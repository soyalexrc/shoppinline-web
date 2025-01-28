import Container from '@components/ui/container';
import {Metadata} from 'next';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import PopularProductFeedHome7 from '@components/product/feeds/popular-product-feed-home7';

import {
    homeSevenGridSlider as gridSlider,
    homeSevenHeroSlider as heroSlider,
    homeSevenGridHero as gridHero,
} from '@framework/static/banner';
import BannerGrid from "@components/common/banner-grid";
import ProductWithBestDeals from "@components/product/product-with-best-deals";
import ListingTabsElectronicFeed from '@components/product/feeds/listingtabs-electronic-feed';
import LatestblogCarousel from '@components/common/latestblog-carousel';
import Marquee from '@utils/marquee';
import BrandCarousel from '@components/common/brands-carousel';
import SectionHeader from '@components/common/section-header';
import CollectionPopular from '@components/common/collection-popular';
import ListingTabsTopSell from '@components/product/feeds/listingtabs-topsell';


export const metadata: Metadata = {
    title: 'Electronic Store - Home 5'
};

export default async function Page({ params }: { params: any }) {
    const { lang } = await params;
    return (
        <>
            <Container className="2xl:max-w-[1700px] ">
                <div className="grid xl:gap-5 grid-cols-1 xl:grid-cols-12">
                    <HeroSliderBlock
                        variant={"slider-6"}
                        heroBanner={heroSlider}
                        showHeroContent={true}
                        className={`xl:col-span-8 mb-5 xl:mb-12`}
                        contentClassName="p-7 sm:py-18 xl:py-16 sm:px-16 xl:px-24 min-h-[270px] md:min-h-[370px] 2xl:min-h-[515px] rounded-xl"
                        lang={lang}
                    />
                    <BannerGrid
                        lang={lang}
                        data={gridSlider}
                        grid={1}
                        girdClassName="xl:gap-5"
                        variant={"rounded-xl"}
                        className="xl:col-span-4 mb-5 xl:mb-12"
                    />
                </div>
                <PopularProductFeedHome7 lang={lang} className="mb-8 lg:mb-15" variant={'outBorder-xl'} />

                <CollectionPopular lang={lang} className="mb-8 lg:mb-12" />

                <ProductWithBestDeals lang={lang} className={'navSlider'} variant={'outBorder-xl'} showBanner={false} />

                <BannerGrid
                    lang={lang}
                    data={gridHero}
                    grid={3}
                    className="mb-8 lg:mb-15"
                />

                <ListingTabsTopSell lang={lang} colSiderbar={false} variant={'outBorder-xl'} />
            </Container>

            <div className={'bg-[#263c97] p-4'}>
                <Container className="2xl:max-w-[1700px] ">
                    <Marquee speed={30} className="text-base text-white ">
                  <span>
                    🌟 Uminex- Digital Store React NextJS Template
                  </span>
                        <span>
                    🌟 Uminex is a creative digital Store NextJS Template build with NextJS 14 and Tailwindcss.
                  </span>
                        <span>
                    🌟 You can send us email to support@ibigecommerce.com. We will process tickets and respond you to in the queue order.
                  </span>
                    </Marquee>
                </Container>
            </div>


            <div className={' py-8 lg:py-12'}>
                <Container className="2xl:max-w-[1700px] ">

                    <BestSellerProductFeed lang={lang} className="mb-8 lg:mb-15" variant={'outBorder-xl'} />
                    <SectionHeader
                        sectionHeading="text-latestblog"
                        className={"uppercase mb-3"}
                        lang={lang}
                    />
                    <LatestblogCarousel lang={lang} variant={'home7'} className="mb-5"/>
                </Container>
            </div>


            <div className={'border-t border-black/5  py-4'}>
                <Container className="2xl:max-w-[1700px] ">
                    <BrandCarousel lang={lang} className="mb-0" />
                </Container>
            </div>
        </>
    );
}
