import Notifications from '@components/my-account/notification';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notification',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
  const { lang } = await params;
  return <Notifications lang={lang} />;
}
