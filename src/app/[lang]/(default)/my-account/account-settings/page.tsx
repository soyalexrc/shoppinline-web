import AccountDetails from '@components/my-account/account-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account Settings',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
  const { lang } = await params;
  return <AccountDetails lang={lang} />;
}
