import Heading from '@components/ui/heading';
import CategoryFilterMenu from '@components/search/category-filter-menu';
import Alert from '@components/ui/alert';
import Scrollbar from '@components/ui/scrollbar';
import CategoryListCardLoader from '@components/ui/loaders/category-list-card-loader';
import { useCategoriesQuery } from '@framework/category/get-filter-categories';
import { useTranslation } from 'src/app/i18n/client';
import { LIMITS } from '@framework/utils/limits';

export const CategoryFilter = ({ lang }: { lang: string }) => {
  const { t } = useTranslation(lang, 'common');
  const { data, isLoading, error } = useCategoriesQuery({
    limit: LIMITS.CATEGORIES_LIMITS,
  });

  if (isLoading) {
    return (
      <div className="hidden xl:block">
        <div className="px-2 mt-8 w-72">
          <CategoryListCardLoader uniqueKey="category-list-card-loader" />
        </div>
      </div>
    );
  }
  if (error) return <Alert message={error.message} />;

  return (
    <div className="block mb-10">
      <Heading className="uppercase mb-3 block-title">
        {t('text-categories')}
      </Heading>
      <div className="max-h-full overflow-hidden">
        <Scrollbar className="w-full category-filter-scrollbar">
          {data?.categories?.data?.length ? (
            <CategoryFilterMenu items={data?.categories?.data} lang={lang} />
          ) : (
            <div className="min-h-full pt-6 pb-8 px-9 lg:p-8">
              {t('text-no-results-found')}
            </div>
          )}
        </Scrollbar>
      </div>
    </div>
  );
};
