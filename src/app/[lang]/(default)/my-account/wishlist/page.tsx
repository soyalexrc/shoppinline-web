import Wishlist from '@components/my-account/wishlist';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wishlist',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
  const { lang } = await params;
  return <Wishlist lang={lang} />;
}
