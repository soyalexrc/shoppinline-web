'use client';

// import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
// import Text from '@components/ui/text';
import { FaInstagram } from 'react-icons/fa';

import { collectionPlaceholder } from '@assets/placeholders';
import { useTranslation } from 'src/app/i18n/client';

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  href: LinkProps['href'];
  lang: string;
  collection: {
    image: string;
    title: string;
    description?: string;
  };
}

const CollectionCard: React.FC<Props> = ({
  collection,
  imgWidth = 262,
  imgHeight = 220,
  href,
  lang,
}) => {
  const { image, title, description } = collection;
  console.log(description);
  const { t } = useTranslation(lang, 'common');
  return (
    <Link
      href={`/${lang}${href}`}
      className="flex flex-col overflow-hidden rounded-md group shadow-card relative"
    >
      <Image
        src={image ?? collectionPlaceholder}
        alt={t(title) || t('text-card-thumbnail')}
        width={imgWidth as number}
        height={imgHeight as number}
        className="rounded-lg object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
      />
      <div className="absolute w-15 h-15 inset-2/4  transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2  rounded-full bg-white flex justify-center items-center opacity-0 group-hover:opacity-90">
        <FaInstagram className="w-6 h-6 m-auto   text-brand-dark " />
      </div>
    </Link>
  );
};

export default CollectionCard;
