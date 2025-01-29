import Container from '@components/ui/container';
import { Metadata } from 'next';
import Breadcrumb from '@components/ui/breadcrumb';
import { BlogSidebar } from '../blog-sidebar';
import React from 'react';
// import { BlogListContent } from '../blog-category-list/blog-list-content';
import BlogPageContent from '../blog-page-content';

export const metadata: Metadata = {
  title: 'Blog',
};

type Params = {
  lang: string
}

export default async function Page({ params }: { params: Params }) {
  const { lang } = await params;
  return (
    <>
      <Container>
        <div className="pt-7 lg:pt-11 ">
          <Breadcrumb lang={lang} />
        </div>
        <div className="flex pt-5 lg:pt-8 pb-16 lg:pb-20 blog-category">
          <>
            <div className="flex-shrink-0 pe-7 xl:pe-8 hidden lg:block w-80  sticky top-16 h-full">
              <BlogSidebar lang={lang} />
            </div>
            <div className="w-full lg:-mt-1">
              <BlogPageContent lang={lang} variant={'list'} />
            </div>
          </>
        </div>
      </Container>
    </>
  );
}
