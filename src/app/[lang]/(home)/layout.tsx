import ModernLayout from '@layouts/home/layout';

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
  return <ModernLayout lang={lang}>{children}</ModernLayout>;
}
