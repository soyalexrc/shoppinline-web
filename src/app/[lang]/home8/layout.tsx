import Home8Layout from '@layouts/home8/layout';

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
    return <Home8Layout lang={lang}>{children}</Home8Layout>;
}
