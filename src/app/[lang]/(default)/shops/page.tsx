import ShopsPageContent from '@components/shops/shops-page-content';
import PageHeroSection from '@components/ui/page-hero-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shops',
};

type Params = {
    lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return (
    <>
      <PageHeroSection heroTitle="text-shop-page" lang={lang} />
      <ShopsPageContent lang={lang} />
    </>
  );
}
