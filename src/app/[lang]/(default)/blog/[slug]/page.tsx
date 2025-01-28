import Container from '@components/ui/container';
import { Metadata } from 'next';
import Breadcrumb from "@components/ui/breadcrumb";
import {BlogPost} from "./blog-post";
import React from "react";

export const metadata: Metadata = {
    title: 'Blog',
};

export default async function Page({ params }: { params: any }) {
  const { lang } = await params;
  return (
      <>
        <Container>
          <div className="pt-7 lg:pt-11 pb-10 blog-category">
            <Breadcrumb lang={lang} />
            <div className="m-auto">
              <BlogPost key={'blogPost'} className={`pt-8 pb-8`} lang={lang} />
            </div>
          </div>
        </Container>
      </>
    );
}
