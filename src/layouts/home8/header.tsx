'use client';
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { siteSettings } from '@settings/site-settings';
import { ROUTES } from '@utils/routes';
import { useUI } from '@contexts/ui.context';
import { useActiveScroll } from '@utils/use-active-scroll';
import Container from '@components/ui/container';
import Logo from '@components/ui/logo';
import UserIcon from '@components/icons/user-icon';
import MenuIcon from '@components/icons/menu-icon';
import SearchIcon from '@components/icons/search-icon';
import HeaderMenu from '@layouts/header/header-menu';
import HeaderMenutop from '@layouts/header/header-menutop';
import LanguageSwitcher from '@components/ui/language-switcher';
import { useModalAction } from '@components/common/modal/modal.context';
import cn from 'classnames';
import Search from '@components/common/search';
import AccountIcon from '@components/icons/account-icon';
import { FiMenu } from 'react-icons/fi';
import CategoryDropdownMenu from '@components/category/category-dropdown-menu';
import { useTranslation } from 'src/app/i18n/client';
import Text from '@components/ui/text';

const AuthMenu = dynamic(() => import('@layouts/header/auth-menu'), {
  ssr: false,
});
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});

type DivElementRef = HTMLDivElement | null;
const { site_header } = siteSettings;

interface HeaderProps {
  lang: string;
  className?: string;
  variant?: string;
}
const Header: React.FC<HeaderProps> = ({ className, lang, variant }) => {
  const {
    openSidebar,
    displaySearch,
    openSearch,
    isAuthorized,
    displayMobileSearch,
  } = useUI();
  const { openModal } = useModalAction();
  const { t } = useTranslation(lang, 'common');
  const siteHeaderRef = useRef<DivElementRef>(null);
  const [categoryMenu, setCategoryMenu] = useState(Boolean(false));
  useActiveScroll(siteHeaderRef);

  function handleLogin() {
    openModal('LOGIN_VIEW');
  }

  function handleMobileMenu() {
    return openSidebar();
  }

  function handleCategoryMenu() {
    setCategoryMenu(!categoryMenu);
  }

  return (
    <>
      <header
        id="siteHeader"
        ref={siteHeaderRef}
        className={cn(
          'header-one sticky-header sticky top-0 z-50 lg:relative w-full xl:-mb-24 bg-white xl:bg-transparent',
          displayMobileSearch && 'active-mobile-search',
          className,
        )}
      >
        <div
          className={cn(
            'innerSticky z-20 w-full transition duration-200 ease-in-out  body-font ',
            { 'bg-brand-dark text-white': variant === 'home5' },
          )}
        >
          <Search
            lang={lang}
            searchId="mobile-search"
            className="top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-12 xl:top-1"
          />

          <div className="">
            <Container>
              <div className="flex items-center justify-between  py-2 md:py-4">
                <div className="relative flex-shrink-0 lg:hidden">
                  <button
                    aria-label="Menu"
                    className="bg-brand rounded focus:outline-none flex-shrink-0 text-sm  text-skin-inverted px-2.5 md:px-3 lg:px-[18px] py-2 md:py-2.5 lg:py-3 flex items-center transition-all hover:border-skin-four"
                    onClick={handleMobileMenu}
                  >
                    <MenuIcon />
                  </button>
                </div>

                <Logo lang={lang} className="logo ps-3 md:ps-0 lg:mx-0" />
                {/* End of logo */}

                <HeaderMenu
                  data={site_header.menu}
                  className="hidden  lg:flex lg:max-w-[700px] xl:max-w-[800px] "
                  lang={lang}
                />
                {/* End of Menu */}

                <div className="text-brand-icon-header flex text-sm space-x-5  lg:max-w-[33%]">
                  <button
                    type="button"
                    aria-label="Search Toggle"
                    onClick={() => openSearch()}
                    title="Search toggle"
                    className="outline-none  w-12 md:w-14 h-full hidden lg:flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
                  >
                    <SearchIcon className="w-[22px] h-[22px] text-base" />
                  </button>
                  {/* End of search handler btn */}

                  <AuthMenu
                    isAuthorized={isAuthorized}
                    href={`/${lang}${ROUTES.ACCOUNT}`}
                    className="hidden lg:flex"
                    btnProps={{
                      children: <AccountIcon />,
                      onClick: handleLogin,
                    }}
                  >
                    {t('text-account')}
                  </AuthMenu>

                  <CartButton
                    className="hidden lg:flex"
                    lang={lang}
                    hideLabel={true}
                  />
                </div>

                {/* End of auth & lang */}

                {displaySearch && (
                  <div className="sticky-search w-full absolute top-0 left-0 px-4 flex items-center justify-center h-full">
                    <Search
                      className="max-w-[780px] xl:max-w-[830px] 2xl:max-w-[1000px]"
                      lang={lang}
                    />
                  </div>
                )}
                {/* End of conditional search  */}
              </div>
            </Container>
          </div>
        </div>
      </header>
      {categoryMenu && (
        <div
          className="shadow_bkg_show fixed w-full h-full inset-0 bg-black/60 z-40"
          onClick={handleCategoryMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
