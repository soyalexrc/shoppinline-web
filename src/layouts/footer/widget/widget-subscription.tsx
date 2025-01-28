'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@components/ui/form/input';
import { useTranslation } from 'src/app/i18n/client';
import EmailIcon from '@components/icons/email-icon';
import Text from '@components/ui/text';
import Heading from '@components/ui/heading';
import cn from 'classnames';

interface NewsLetterFormValues {
  email: string;
}
const defaultValues = {
  email: '',
};

function SubscriptionForm({ lang ,variant  }: { lang: string; variant?: string; }) {
  const { t } = useTranslation(lang, 'forms');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsLetterFormValues>({
    defaultValues,
  });
  const [subscriptionSuccess, setSubscriptionSuccess] =
    useState<Boolean>(false);

  function onSubmit(values: NewsLetterFormValues, e: any) {
    // show success message
    setSubscriptionSuccess(true);

    // remove success message after 3 seconds
    setTimeout(() => {
      setSubscriptionSuccess(false);
    }, 5000);

    // reset form after submit
    e.target.reset();
    console.log(values, 'News letter');
  }
  return (
    <form
      noValidate
      className="flex relative"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="flex items-center absolute ltr:left-0 rtl:right-0 top-0 h-12 px-3.5 transform">
        <EmailIcon className="w-4 2xl:w-[18px] h-4 2xl:h-[18px]" />
      </span>
      <Input
        placeholder={t('forms:placeholder-email-subscribe')}
        type="email"
        id="subscription-email"
        variant="solid"
        className="w-full"
        inputClassName={cn('ps-10 md:ps-10 pe-10 md:pe-10 2xl:px-11 h-12 rounded-md bg-transparent border-black/10 focus:outline-none focus:shadow-outline text-gray-400',
            {
                'xs:border-white/10':  variant === 'home5',
            }
            )}
        {...register('email', {
          required: `${t('email-required')}`,
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: `${t('email-error')}`,
          },
        })}
        error={errors.email?.message}
        lang={lang}
      />
      {!errors.email && subscriptionSuccess && (
        <p className="my-2 text-13px text-brand">
          {t('text-subscription-success-msg')}
        </p>
      )}
      <button
        className="bg-brand text-sm font-medium text-white md:h-12 py-2 px-10   focus:outline-none focus:shadow-outline  transform  rounded-e-md -ml-1"
        aria-label="Subscribe Button"
      >
          {t('footer:text-btnsubscribe')}
      </button>
    </form>
  );
}

interface Props {
  lang: string;
  className?: string;
    variant?: string;
}

const WidgetSubscription: React.FC<Props> = ({ lang, className,variant }) => {
  const { t } = useTranslation(lang, 'footer');

  return (
    <div className={cn('flex flex-col',{
        'text-fill-footer': variant === 'home5' || variant === 'home7',
        }, className)}
    >
      <Heading variant="base" className={cn('uppercase mb-4 lg:mb-5',
          {
              'text-white': variant === 'home5' || variant === 'home7',
          })}
      >
        {t('widget-title-subscribe')}
      </Heading>

      <Text className="pb-4">{t('text-subscribe')}</Text>
      <SubscriptionForm lang={lang} variant={variant}/>
    </div>
  );
};

export default WidgetSubscription;
