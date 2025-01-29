import Home8Layout from '@layouts/home8/layout';

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
  return <Home8Layout lang={lang}>{children}</Home8Layout>;
}
