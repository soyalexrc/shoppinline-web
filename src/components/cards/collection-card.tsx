'use client';

import Heading from '@components/ui/heading';
import Image from '@components/ui/image';
import Link from '@components/ui/link';
import { LinkProps } from 'next/link';
import Text from '@components/ui/text';

import { collectionPlaceholder } from '@assets/placeholders';
import { useTranslation } from 'src/app/i18n/client';
import cn from 'classnames';

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  href: LinkProps['href'];
  lang: string;
  variant?: 'rounded' | 'default' | 'rounded-xl';
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
  variant = 'default',
}) => {
  const { image, title, description } = collection;
  const { t } = useTranslation(lang, 'common');
  return (
    <Link
      href={`/${lang}${href}`}
      className={cn('flex flex-col overflow-hidden  group shadow-card relative',{
          'rounded-md': variant === 'default',
          'rounded-xl justify-center  items-center': variant === 'rounded-xl',
      })}
    >
      <Image
        src={image ?? collectionPlaceholder}
        alt={t(title) || t('text-card-thumbnail')}
        width={imgWidth as number}
        height={imgHeight as number}
        className="object-cover transition duration-300 ease-in-out transform bg-fill-thumbnail group-hover:opacity-90 group-hover:scale-105"
      />
      <div className={cn('absolute flex flex-col px-4 bg-white rounded group-hover:bg-fill-base',{
          'inset-x-4 bottom-4  ': variant === 'default',
          'rounded-full  bottom-7   py-1 max-w-52 w-full': variant === 'rounded-xl',
      })}>
        <Heading
          variant="base"
          className={cn('lg:px-5 py-2 text-center group-hover:text-white', {
                  'md:text-base': variant === 'rounded-xl',
              })}
        >
          {t(title)}
        </Heading>
       
      </div>
    </Link>
  );
};

export default CollectionCard;
