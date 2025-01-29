import ShopsSingleDetails from '@components/shops/shops-single-details';

type Params = {
    lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
const { lang } = await params;
  return (
    <>
      <ShopsSingleDetails lang={lang} />
    </>
  );
}
