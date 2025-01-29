'use client';
import type { FC } from 'react';
import { useTranslation } from 'src/app/i18n/client';
import cn from 'classnames';
import BlogCardBig from '@components/blog/blog-card-big';
import { useState } from 'react';
import Pagination from '@components/ui/pagination';
import { GrNext, GrPrevious } from 'react-icons/gr';
import {Blog} from "@framework/types";

interface blogGridProps {
  dataBlog?: Blog[];
  className?: string;
  lang: string;
}

export const BlogBigContent: FC<blogGridProps> = ({
  dataBlog,
  className = '',
  lang,
}) => {
  // const { t } = useTranslation(lang, 'common');

  const [currentPage, setCurrentPage] = useState<number>(1);
  // const [value, setValue] = useState('');
  const countPerPage = 8;
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
      <div className={cn('grid grid-cols-1 gap-2 pt-8', className)}>
        {filterData?.map((item: Blog) => {
          return (
            <BlogCardBig key={`blog--key-${item.id}`} blog={item} lang={lang} />
          );
        })}

        {/* end of error state */}
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
