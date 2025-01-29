import { Metadata } from 'next';
import AddressPageContent from './address-page-content';

export const metadata: Metadata = {
  title: 'Address',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return <AddressPageContent lang={lang} />;
}
