import Link from '@components/ui/link';
import Image from '@components/ui/image';
import { ROUTES } from '@utils/routes';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';
import { useTranslation } from 'src/app/i18n/client';

type Shop = {
  name: string,
  slug: string;
  address: string;
    logo: {
        thumbnail: string;
    }
}

type VendorCardProps = {
  lang: string;
  shop?: Shop;
};

const VendorCard: React.FC<VendorCardProps> = ({ lang, shop }) => {
  const { t } = useTranslation(lang);
  const placeholderImage = `/assets/placeholder/products/product-grid.svg`;
  const { name, slug, address, logo } = shop;
  return (
    <Link
      href={`/${lang}${ROUTES.SHOPS}/${slug}`}
      className="relative flex items-center px-5 py-5 transition-all bg-white border rounded-lg cursor-pointer xl:px-7 xl:py-7 border-border-base shadow-vendorCard "
    >
      <div className="relative flex items-center justify-center w-16 h-16 overflow-hidden rounded-lg shrink-0 bg-fill-thumbnail xl:w-20 xl:h-20">
        <Image
          alt={t('common:text-logo')}
          src={logo?.thumbnail ?? placeholderImage}
          width={80}
          height={80}
        />
      </div>

      <div className="flex flex-col ltr:ml-4 rtl:mr-4 xl:ltr:ml-5 xl:rtl:mr-5">
        <Heading variant="mediumHeading" className="pb-1.5">
          {name}
        </Heading>
        <Text className="xl:leading-6">{address}</Text>
      </div>
    </Link>
  );
};

export default VendorCard;
