import Home4Layout from '@layouts/home4/layout';

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
  return <Home4Layout lang={lang}>{children}</Home4Layout>;
}
