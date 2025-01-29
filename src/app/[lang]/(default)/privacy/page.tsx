import PageHeroSection from '@components/ui/page-hero-section';
import PrivacyPageContent from './privacy-page-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
};

type Params = {
    lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return (
    <>
      <PageHeroSection heroTitle="text-page-privacy-policy" lang={lang} />
      <PrivacyPageContent lang={lang} />
    </>
  );
}
