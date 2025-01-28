import Container from '@components/ui/container';
import PageHeroSection from '@components/ui/page-hero-section';
import { Metadata } from 'next';
import TermsPageContent from './terms-page-content';

export const metadata: Metadata = {
  title: 'Terms',
};

export default async function Page({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <PageHeroSection heroTitle="text-page-terms-condition" lang={lang} />
      <div className="py-12 lg:py-16">
        <Container>
            <TermsPageContent lang={lang} />
        </Container>
      </div>
    </>
  );
}
