import Home5Layout from "@layouts/home5/layout";

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
  return <Home5Layout lang={lang}>{children}</Home5Layout>;
}
