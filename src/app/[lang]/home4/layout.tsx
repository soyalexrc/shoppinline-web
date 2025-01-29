import Home4Layout from '@layouts/home4/layout';

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
  return <Home4Layout lang={lang}>{children}</Home4Layout>;
}
