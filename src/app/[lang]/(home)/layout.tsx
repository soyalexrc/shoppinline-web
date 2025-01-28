import ModernLayout from '@layouts/home/layout';

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
    return <ModernLayout lang={lang}>{children}</ModernLayout>;
}
