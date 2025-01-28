import Heading from '@components/ui/heading';
import Link from '@components/ui/link';
import { useTranslation } from 'src/app/i18n/client';
import cn from 'classnames';

interface Props {
  className?: string;
  lang: string;
  variant?: string;
  data: {
    widgetTitle?: string;
    lists: {
      id: number;
      path?: string;
      title: string;
      icon?: any;
    }[];
  };
}

const WidgetLink: React.FC<Props> = ({ lang, className, data,variant }) => {
  const { widgetTitle, lists } = data;
  const { t } = useTranslation(lang, 'footer');
  return (
      <div className={cn( {
              'text-fill-footer': variant === 'home5' || variant === 'home7' || variant === 'home8',
          },
          className
      )}
      >
          <Heading variant="base" className={cn('uppercase mb-4 lg:mb-5',
              {
                  'text-white': variant === 'home5' || variant === 'home7' || variant === 'home8',
              })}>
              {t(`${widgetTitle}`)}
          </Heading>
          <ul className="text-sm lg:text-14px flex flex-col space-y-3">
              {lists?.map((list) => (
                  <li
                      key={`widget-list--key${list.id}`}
                      className="flex items-baseline"
                  >
                      {list.icon && (
                          <span className="me-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                {list.icon}
              </span>
                      )}

                      <Link
                          href={`/${lang}${list.path ? list.path : ''}`}
                          className="transition-colors duration-200 hover:text-brand"
                      >
                          {t(`${list.title}`)}
                      </Link>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default WidgetLink;
