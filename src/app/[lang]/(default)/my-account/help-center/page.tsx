import Help from '@components/my-account/help';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return <Help lang={lang} />;
}
