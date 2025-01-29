import Home3Layout from '@layouts/home3/layout';

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
  return <Home3Layout lang={lang}>{children}</Home3Layout>;
}
