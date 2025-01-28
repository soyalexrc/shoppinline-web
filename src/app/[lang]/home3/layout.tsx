import Home3Layout from '@layouts/home3/layout';

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
  return <Home3Layout lang={lang}>{children}</Home3Layout>;
}
