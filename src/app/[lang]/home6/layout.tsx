import Home6Layout from "@layouts/home6/layout";

export default async function DefaultLayout({children, params}: {children: React.ReactNode;params: any;})
{
    const { lang } = await params;
  return <Home6Layout lang={lang}>{children}</Home6Layout>;
}
