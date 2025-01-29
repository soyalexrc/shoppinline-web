import LoginForm from '@components/auth/login-form';
import Divider from '@components/ui/divider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

type Params = {
    lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
const { lang } = await params;

  return (
    <>
      <Divider />
      <div className="flex items-center justify-center">
        <div className="px-4 py-12 sm:py-16 lg:py-20 md:px-6 lg:px-8 2xl:px-10">
          <LoginForm
            isPopup={false}
            className="border rounded-lg border-border-base"
            lang={lang}
          />
        </div>
      </div>
      <Divider />
    </>
  );
}
