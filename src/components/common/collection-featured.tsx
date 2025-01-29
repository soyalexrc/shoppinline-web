'use client';

// import SectionHeader from '@components/common/section-header';
import useWindowSize from '@utils/use-window-size';
// import { ROUTES } from '@utils/routes';
import CollectionCard, {Collection} from '@components/cards/collection-featured-card';

interface Props {
  lang: string;
  heroBanner?: Collection[];
  className?: string;
  headingPosition?: 'left' | 'center';
}

const CollectionFeatured: React.FC<Props> = ({
  heroBanner,
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
  headingPosition = 'center',
  lang,
}) => {
  console.log(headingPosition)
  const { width } = useWindowSize();
  console.log(width);
  return (
    <div className={className}>
      <div className="gap-5 grid xl:grid-cols-2 ">
        {heroBanner?.map((item) => (
          <CollectionCard key={item.id} collection={item} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default CollectionFeatured;
