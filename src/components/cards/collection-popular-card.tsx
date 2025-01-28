'use client';

import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
import Text from '@components/ui/text';

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
        productCount?: number;
    };
}

const CollectionPopularCard: React.FC<Props> = ({
                                             collection,
                                             imgWidth = 267,
                                             imgHeight = 98,
                                             href,
                                             lang,
                                         }) => {
    const { image, title, productCount  } = collection;
    const { t } = useTranslation(lang, 'common');
    return (
      <Link
        href={`/${lang}${href}`}
        className="flex flex-col justify-center overflow-hidden rounded-xl group shadow-card relative"
      >
        <Image
          src={image ?? collectionPlaceholder}
          alt={t(title) || t('text-card-thumbnail')}
          width={imgWidth as number}
          height={imgHeight as number}
          className="object-cover transition duration-300 ease-in-out transform group-hover:opacity-90"
        />
        <div className="absolute flex flex-col px-5  ">
          <Heading variant="base" className="mb-1 text-white">
            {t(title)}
          </Heading>
          <p className={'text-13px text-white'}>{productCount} Products</p>
        </div>
      </Link>
    );
};

export default CollectionPopularCard;
