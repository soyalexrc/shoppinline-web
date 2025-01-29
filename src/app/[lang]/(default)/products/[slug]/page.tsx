import Container from '@components/ui/container';
import ProductSingleDetails from '@components/product/product';
import ElectronicProductFeed from '@components/product/feeds/electronic-product-feed';
import RelatedProductFeed from '@components/product/feeds/related-product-feed';
import Breadcrumb from '@components/ui/breadcrumb';
// import Divider from '@components/ui/divider';

type Params = {
  lang: string
}

export default async function AccountDetailsPage({ params }: { params: Params }) {
 const { lang } = await params;
  return (
    <>
      <div className="pt-6 lg:pt-7 pb-10">
        <Container>
          <Breadcrumb lang={lang} />
          <ProductSingleDetails lang={lang} />
          <RelatedProductFeed
            uniqueKey="related-products"
            lang={lang}
            className="mb-8 lg:mb-12"
          />
          <ElectronicProductFeed lang={lang} className="mb-8 lg:mb-12" />
        </Container>
      </div>
    </>
  );
}
