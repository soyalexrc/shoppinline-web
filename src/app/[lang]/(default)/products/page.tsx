import PageHeroSection from '@components/ui/page-hero-section';
import ProductsPageContent from './products-page-content';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Products',
};

type Params = {
    lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;

  return (
    <>
      <PageHeroSection heroTitle="text-all-grocery-items" lang={lang} />
      <Suspense>
        <ProductsPageContent lang={lang} />
      </Suspense>
    </>
  );
}
