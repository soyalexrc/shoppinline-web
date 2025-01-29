import Home6Layout from '@layouts/home6/layout';

type Params = {
  lang: string
}

export default async function DefaultLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  return <Home6Layout lang={lang}>{children}</Home6Layout>;
}
