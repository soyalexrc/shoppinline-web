import ChangePassword from '@components/my-account/change-password';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Change Password',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return <ChangePassword lang={lang} />;
}
