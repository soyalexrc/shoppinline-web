import { Metadata } from 'next';
import OrdersPageContent from './orders-page-content';

export const metadata: Metadata = {
  title: 'Orders',
};

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return <OrdersPageContent lang={lang} />;
}
