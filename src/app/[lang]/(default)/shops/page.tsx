import ShopsPageContent from '@components/shops/shops-page-content';
import PageHeroSection from '@components/ui/page-hero-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shops',
};

export default async function Page({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <PageHeroSection
        heroTitle="text-shop-page"
        lang={lang}
      />
      <ShopsPageContent lang={lang} />
    </>
  );
}
