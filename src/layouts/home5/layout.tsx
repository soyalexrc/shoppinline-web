'use client';

import MobileNavigation from '@layouts/mobile-navigation/mobile-navigation';
import { useIsMounted } from '@utils/use-is-mounted';
import Footer from '@layouts/home5/footer';
import Header from '@layouts/home5/header';
import BackToTopButton from "@components/ui/back-to-top";

export default function Home5Layout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const isMounted = useIsMounted();

  return (
    <div className="flex flex-col min-h-screen">

      <Header lang={lang} />
      <main
        className="relative flex-grow pt-5 xl:pt-8 bg-[#f6f7f9]"
        style={{
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {children}
      </main>
      <Footer lang={lang} showWidgetServices={true} variant={"home5"}/>
      <BackToTopButton/>
      <MobileNavigation lang={lang} />
    </div>
  );
}
