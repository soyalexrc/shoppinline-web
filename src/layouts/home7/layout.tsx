'use client';

import MobileNavigation from '@layouts/mobile-navigation/mobile-navigation';
import { useIsMounted } from '@utils/use-is-mounted';
import Footer from '@layouts/home7/footer';
import Header from '@layouts/default/header';
import { useTranslation } from 'src/app/i18n/client';
import BackToTopButton from '@components/ui/back-to-top';

export default function Home7Layout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const isMounted = useIsMounted();

  return (
    <div className="flex flex-col min-h-screen fontManrope">
      <Header lang={lang} />
      <main
        className="relative flex-grow py-5 xl:py-8 "
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer lang={lang} showWidgetServices={false} />
      <BackToTopButton />
      <MobileNavigation lang={lang} />
    </div>
  );
}
