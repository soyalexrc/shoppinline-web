'use client';

import Widgets from '@layouts/footer/widget/widget-home7';
import Copyright from '@layouts/footer/copyright';
import React from 'react';
import cn from 'classnames';
import { footer } from '@layouts/footer/data';
import WidgetSubscription from '@layouts/footer/widget-newsletter';

interface FooterProps {
  variant?: string;
  lang: string;
  className?: string;
  showWidgetServices?: boolean;
}
const { widgets, payment, social } = footer;
const Footer: React.FC<FooterProps> = ({
  variant = 'default',
  className,
  showWidgetServices,
  lang,
}) => {
  return (
    <footer
      className={cn(
        'footer-one border-t border-black/10  font-medium ',
        {
          'bg-[#1f2024]': variant === 'home5',
        },
        className,
      )}
    >
      <Widgets
        widgets={widgets}
        variant={variant}
        lang={lang}
        showWidgetServices={showWidgetServices}
      />
      <Copyright payment={payment} variant={variant} lang={lang} />
    </footer>
  );
};

export default Footer;
