import Home2Layout from '@layouts/home2/layout';

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
  return <Home2Layout lang={lang}>{children}</Home2Layout>;
}
