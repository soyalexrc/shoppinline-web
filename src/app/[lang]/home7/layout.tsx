import Home7Layout from '@layouts/home7/layout';

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
    return <Home7Layout lang={lang}>{children}</Home7Layout>;
}
