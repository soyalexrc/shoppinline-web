'use client';

// import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
// import Text from '@components/ui/text';
// import { FaInstagram } from 'react-icons/fa';

import { collectionPlaceholder } from '@assets/placeholders';
import { useTranslation } from 'src/app/i18n/client';

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  lang: string;
  collection: {
    image: string;
    title: string;
    href: string;
  };
}

const BrandCard: React.FC<Props> = ({
  collection,
  imgWidth = 200,
  imgHeight = 65,
  lang,
}) => {
  const { image, title, href } = collection;
  const { t } = useTranslation(lang, 'common');
  return (
    <Link
      href={`/${lang}${href}`}
      className="flex flex-col overflow-hidden  group  relative"
    >
      <Image
        src={image ?? collectionPlaceholder}
        alt={t(title) || t('text-card-thumbnail')}
        width={imgWidth as number}
        height={imgHeight as number}
        className="rounded-lg object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
      />
    </Link>
  );
};

export default BrandCard;
