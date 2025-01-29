import { Metadata } from 'next';
import CompleteOrderContent from './complete-order-content';

export const metadata: Metadata = {
  title: 'Order',
};

type Params = {
  lang: string
}

export default async function Order({ params }: { params: Params }) {
  const { lang } = await params;
  return (
    <>
      <CompleteOrderContent lang={lang} />
    </>
  );
}
