'use client';

import cn from 'classnames';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Transition,
} from '@headlessui/react';

// import { RiArrowRightSLine } from 'react-icons/ri';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useTranslation } from 'src/app/i18n/client';

// type CollapseProps = {
//   lang: string;
//   item: any;
//   translatorNS: string;
//   variant?: 'gray' | 'transparent';
// };

export const Accordion = ({
  lang,
  item,
  translatorNS,
  variant = 'gray',
}) => {
  const { t } = useTranslation(lang, translatorNS);
  const { id, title, content } = item;
  return (
    <div className="w-full">
      <div className="w-full mx-auto mb-4 rounded shadow-category bg-white text-brand-light group">
        <Disclosure as="div">
          {({ open }) => (
            <>
              <DisclosureButton className="border-b-1 flex justify-between w-full px-5 py-4 text-base font-medium 2xl:px-6 2xl:py-6 text-left  text-brand-dark focus:outline-none">
                <span
                  className={cn(
                    'text-sm font-medium leading-relaxed text-heading ltr:pr-2 rtl:pl-2',
                    {
                      'md:text-base': variant === 'gray',
                      'md:text-base lg:text-lg': variant === 'transparent',
                    },
                  )}
                >
                  {t(title)}
                </span>
                {open ? <FaMinus /> : <FaPlus />}
              </DisclosureButton>

              {open && (
                <DisclosurePanel transition>
                  <div className="px-5 pb-4 -mt-1 text-sm leading-7 2xl:pb-7 2xl:px-6 2xl:mt-0 2xl:text-15px text-gray-500">
                    {t(content)}
                  </div>
                </DisclosurePanel>
              )}
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
