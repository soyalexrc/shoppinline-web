import ShopsSingleDetails from '@components/shops/shops-single-details';

export default async function ShopDetailsPage({ params }: { params: any }) {
  const { lang } = await params;
  return (
    <>
      <ShopsSingleDetails lang={lang} />
    </>
  );
}
