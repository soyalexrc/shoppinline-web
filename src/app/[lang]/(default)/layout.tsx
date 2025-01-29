import DefaultLayout from '@layouts/default/layout';

type Params = {
  lang: string
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  return <DefaultLayout lang={lang}>{children}</DefaultLayout>;
}
