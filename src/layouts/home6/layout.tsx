'use client';

import Header from '@layouts/home6/header';
import Footer from '@layouts/footer/footer';
import MobileNavigation from '@layouts/mobile-navigation/mobile-navigation';
import { useIsMounted } from '@utils/use-is-mounted';
import { useTranslation } from 'src/app/i18n/client';
import BackToTopButton from '@components/ui/back-to-top';

export default function Home6Layout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const isMounted = useIsMounted();

  return (
    <div className="flex flex-col min-h-screen">
      <Header lang={lang} className={'sm:mb-0'} />
      <main
        className="relative "
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer lang={lang} showWidgetServices={true} variant={'home5'} />
      <BackToTopButton />
      <MobileNavigation lang={lang} />
    </div>
  );
}
