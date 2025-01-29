'use client';

import cn from 'classnames';
import Link from '@components/ui/link';
import useWindowSize from '@utils/use-window-size';
import { useTranslation } from 'src/app/i18n/client';
import {Banner} from "@components/cards/banner-card";

type ImageObj = { mobile: { width: number, height: number, url: string  }, desktop: { url: string, width: number, height: number  }, }

export interface BannerExtended extends Banner {
    description: string;
    btnText: string;
    btnUrl: string;
}

interface BannerProps {
  lang: string;
  banner?: BannerExtended;
  className?: string;
  heroContentCard?: boolean;
  variant: string;
}

function getImage(deviceWidth: number, imgObj: ImageObj) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function HeroBannerCard({
  lang,
  banner,
  className = 'py-20 xy:pt-24',
  variant,
  heroContentCard = true,
}: BannerProps) {
  const { t } = useTranslation(lang, 'common');
  const { width } = useWindowSize();
  const { title, description, image } = banner;
  const selectedImage = getImage(width!, image);
  return heroContentCard ? (
    <div
      className={cn(
        'w-full bg-no-repeat bg-cover bg-center flex items-center ',
        { 'min-h-[320px] md:min-h-[367px]': variant === 'slider' },
        {
          'bg-fill-thumbnail': variant !== 'slider-3',
        },
        className,
      )}
      style={{
        backgroundImage: `url('${selectedImage.url}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div
        className={cn(
          ' inset-0 m-[15px] md:mt-[30px]  w-full flex  items-center',
          {
            'sm:absolute mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[700px]':
              variant === 'slider',
            'sm:absolute mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[600px]':
              variant === 'slider-3',
            'sm:absolute lg:px-20 max-w-[480px] md:max-w-[580px] xl:max-w-[700px]':
              variant === 'slider-4',
            'xl:mt-[0px] mx-auto max-w-[1380px]':
              variant === 'slider-5' ||
              variant === 'slider-6' ||
              variant === 'slider-8',
          },
        )}
      >
        <div
          className={cn('text-left ', {
            'md:w-8/12 lg:w-6/12':
              variant === 'slider' || variant === 'slider-8',
            'text-left': variant === 'slider-4',
            'max-w-[450px] p-8 rounded-lg bg-white': variant === 'slider-5',
            'max-w-[500px]': variant === 'slider-6',
          })}
        >
          <p
            className={cn('text-[12px] leading-7 uppercase font-bold ', {
              'text-brand-light ': variant === 'default',
              'text-brand-light':
                variant === 'slider' ||
                variant == 'slider-4' ||
                variant == 'slider-6',
              'text-brand-dark': variant === 'slider-3',
              'sm:text-sm text-brand-dark': variant === 'slider-8',
            })}
          >
            {t(description)}
          </p>
          <h2
            className={cn('text-2xl md:text-4xl font-semibold mt-2 leading-8', {
              'xl:text-5xl 2xl:text-[36px] text-brand-light leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3 ':
                variant == 'slider' ||
                variant == 'slider-4' ||
                variant == 'slider-6',
              'xs:text-brand-dark 2xl:text-[36px]': variant === 'slider-3',
              'sm:mt-4 xs:text-brand-dark 2xl:text-[32px] ':
                variant === 'slider-5',
              'sm:mt-5 xs:text-brand-dark 2xl:text-[60px] 2xl:leading-[1em] ':
                variant == 'slider-8',
            })}
          >
            {t(title)}
          </h2>

          {banner.btnText && (
            <Link
              href={`/${lang}${banner.btnUrl}`}
              className={cn(
                'text-sm h-[44px] mt-5 md:mt-12 text-base inline-flex items-center justify-center transition duration-300 rounded px-10 py-2 font-semibold ',
                {
                  'text-fill-base bg-white hover:text-white hover:bg-brand ':
                    variant == 'slider' || variant === 'slider-4',
                  'text-brand-light bg-brand hover:text-white hover:bg-brand-dark ':
                    variant === 'slider-3',
                  'text-brand-light bg-brand-dark hover:text-white hover:bg-brand ':
                    variant === 'slider-5' || variant == 'slider-8',
                  'text-fill-base bg-white  hover:bg-gray-300 ':
                    variant === 'slider-6',
                  'xl:min-w-[220px]': variant == 'slider-8',
                },
              )}
            >
              {t(banner.btnText)}
            </Link>
          )}
        </div>
      </div>
    </div>
  ) : (
    <Link href={`/${lang}${banner.btnUrl}`}>
      <div
        className={cn(
          'w-full bg-skin-thumbnail bg-no-repeat bg-cover flex items-center',
          {
            'min-h-[160px]  ': variant === 'slider',
          },
          className,
        )}
        style={{
          backgroundImage: `url('${selectedImage.url}')`,
          backgroundPosition:
            variant === 'slider-3' ? 'left bottom -10px' : 'center center',
        }}
      ></div>
    </Link>
  );
}
