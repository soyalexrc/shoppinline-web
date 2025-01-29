import { Suspense } from 'react';
import Divider from '@components/ui/divider';
import SearchPageContent from './search-page-content';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
};

type Params = {
    lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;

  return (
    <>
      <Divider />
      <Suspense>
        <SearchPageContent lang={lang} />
      </Suspense>
    </>
  );
}
