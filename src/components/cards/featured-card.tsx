import Heading from '@components/ui/heading';
import cn from 'classnames';
import { useTranslation } from 'src/app/i18n/client';
import Text from '@components/ui/text';

import React, {JSX} from 'react';

interface ItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  lang: string;
  className?: string;
  item: ItemProps;
  variant?: string;
}

const FeaturedCard: React.FC<Props> = ({ lang, item, className, variant }) => {
  const { t } = useTranslation(lang, 'common');
  const { icon, title, description } = item;
  return (
    <div
      className={cn(
        'group',
        {
          'flex flex-col gap-4': variant === 'default' || variant === 'home3',
          'flex ': variant === 'home2',
          'md:flex text-white justify-center items-center gap-2':
            variant === 'home7',
          'flex text-white justify-center items-center gap-2':
            variant === 'home5',
        },
        className,
      )}
    >
      <div className="flex flex-shrink-0 items-center justify-center ">
        {icon}
      </div>

      {variant == 'home2' ? (
        <div className="ps-4">
          <Heading variant="base" className="sm:text-sm  uppercase ">
            {t(title)}
          </Heading>
          <Text className={'text-13px lg:leading-[22px]'}>
            {t(description)}
          </Text>
        </div>
      ) : variant === 'home7' ? (
        <div className="flex flex-col md:flex-row  md:gap-2 items-center">
          <Heading
            variant="base"
            className="sm:text-13px  uppercase xs:text-white"
          >
            {t(title)}
          </Heading>
          <Text className={'sm:text-13px lg:leading-[22px] text-[#8f9599]'}>
            {t(description)}
          </Text>
        </div>
      ) : variant === 'home5' ? (
        <div className="ps-4 ">
          <Heading
            variant="base"
            className="sm:text-13px  uppercase xs:text-white"
          >
            {t(title)}
          </Heading>
          <Text className={'sm:text-13px lg:leading-[22px] text-[#8f9599]'}>
            {t(description)}
          </Text>
        </div>
      ) : (
        <div className="ps-0 text-center">
          <Heading
            variant="base"
            className="sm:text-[12px] sm:leading-4 uppercase font-bold"
          >
            {t(title)}
          </Heading>
          <Text
            variant="small"
            className="sm:leading-4 font-normal sm:text-[13px]"
          >
            {t(description)}
          </Text>
        </div>
      )}
    </div>
  );
};

export default FeaturedCard;
