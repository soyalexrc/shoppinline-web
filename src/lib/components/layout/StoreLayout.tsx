import { Fragment } from 'react';
import CampaignBar from '@/lib/components/layout/campaign-bar';
import HelperBar from '@/lib/components/layout/helper-bar';
import Header from '@/lib/components/layout/header';
import Footer from '@/lib/components/layout/footer';

type Props = {
  children: React.ReactNode;
};

export default function StoreLayout({ children }: Readonly<Props>) {
  return (
    <div>
      <CampaignBar />
      <HelperBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
