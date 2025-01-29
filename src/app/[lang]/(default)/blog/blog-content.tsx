'use client';

import type { FC } from 'react';
import { useTranslation } from 'src/app/i18n/client';
import BlogCard from '@components/blog/blog-card';
import cn from 'classnames';
import { GrNext, GrPrevious } from 'react-icons/gr';
import Pagination from '@components/ui/pagination';
import { useState } from 'react';
import {Blog} from "@framework/types";

interface blogGridProps {
  dataBlog?: Blog[];
  className?: string;
  lang: string;
}

export const BlogContent: FC<blogGridProps> = ({
  dataBlog,
  className = '',
  lang,
}) => {
  // const { t } = useTranslation(lang, 'common');

  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [value, setValue] = useState('');
  const countPerPage = 9;
  const useDatablog = dataBlog?.slice(0, countPerPage);
  const [filterData, setDataValue] = useState(useDatablog);

  const updatePage = (p: number) => {
    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setDataValue(dataBlog?.slice(from, to));
  };
  return (
    <>
      <div
        className={cn(
          className,
          'grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2',
        )}
      >
        {filterData?.map((item: Blog) => {
          return (
            <BlogCard key={`blog--key-${item.id}`} blog={item} lang={lang} />
          );
        })}
      </div>
      <Pagination
        current={currentPage}
        onChange={updatePage}
        pageSize={countPerPage}
        total={dataBlog?.length}
        prevIcon={
          <GrPrevious size={14} className={`m-auto my-1.5 rtl:rotate-180`} />
        }
        nextIcon={
          <GrNext size={14} className={`m-auto my-1.5 rtl:rotate-180`} />
        }
        className="blog-pagination bg-white rounded mt-2"
      />
    </>
  );
};

export class BlogBigContent {}
