import Legal from '@components/my-account/notice';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notice',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
  const { lang } = await params;
  return <Legal lang={lang} />;
}
