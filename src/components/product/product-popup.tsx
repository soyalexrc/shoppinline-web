import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import isEmpty from 'lodash/isEmpty';
import { ROUTES } from '@utils/routes';
import Button from '@components/ui/button';
import Counter from '@components/ui/counter';
import { useCart } from '@contexts/cart/cart.context';
import ProductAttributes from '@components/product/product-attributes';
import { generateCartItem } from '@utils/generate-cart-item';
import usePrice from '@framework/product/use-price';
import { getVariations } from '@framework/utils/get-variations';
import { useTranslation } from 'src/app/i18n/client';
import ThumbnailCarousel from '@components/ui/carousel/thumbnail-carousel';
import Image from '@components/ui/image';
import CartIcon from '@components/icons/cart-icon';
import Heading from '@components/ui/heading';
import Text from '@components/ui/text';
import { footer } from '../../layouts/footer/data';
import LabelIcon from '@components/icons/label-icon';
import { IoArrowRedoOutline } from 'react-icons/io5';
import RelatedProductFeed from '@components/product/feeds/related-product-feed';
import SocialShareBox from '@components/ui/social-share-box';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { toast } from 'react-toastify';
import useWindowSize from '@utils/use-window-size';
import {
  useModalAction,
  useModalState,
} from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import VariationPrice from './variation-price';
import isEqual from 'lodash/isEqual';
import { productGalleryPlaceholder } from '@assets/placeholders';

const breakpoints = {
  '1536': {
    slidesPerView: 6,
  },
  '1280': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '640': {
    slidesPerView: 3,
  },
  '360': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

export default function ProductPopup({ lang }: { lang: string }) {
  const { t } = useTranslation(lang, 'common');
  const { data } = useModalState();
  const { width } = useWindowSize();
  const { closeModal } = useModalAction();
  const router = useRouter();
  const { addItemToCart, isInCart, getItemFromCart, isInStock } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [addToWishlistLoader, setAddToWishlistLoader] =
    useState<boolean>(false);
  const [shareButtonStatus, setShareButtonStatus] = useState<boolean>(false);
  const { price, basePrice, discount } = usePrice({
    amount: data.sale_price ? data.sale_price : data.price,
    baseAmount: data.price,
    currencyCode: 'USD',
  });
  const variations = getVariations(data.variations);
  const { slug, image, name, unit, description, gallery, tag, quantity } = data;
  const productUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${lang}${ROUTES.PRODUCT}/${slug}`;
  const handleChange = () => {
    setShareButtonStatus(!shareButtonStatus);
  };
  const { payment } = footer;
  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) =>
        attributes.hasOwnProperty(variation),
      )
    : true;
  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = data?.variation_options?.find((o: any) =>
      isEqual(
        o.options.map((v: any) => v.value).sort(),
        Object.values(attributes).sort(),
      ),
    );
  }
  const item = generateCartItem(data, selectedVariation);
  const outOfStock = isInCart(item.id) && !isInStock(item.id);
  function addToCart() {
    if (!isSelected) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 1500);
    addItemToCart(item, selectedQuantity);
    // @ts-ignore
    toast(t('text-added-bag'), {
      progressClassName: 'fancy-progress-bar',
      position: width! > 768 ? 'bottom-right' : 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
  function addToWishlist() {
    setAddToWishlistLoader(true);
    setFavorite(!favorite);
    const toastStatus: string =
      favorite === true ? t('text-remove-favorite') : t('text-added-favorite');
    setTimeout(() => {
      setAddToWishlistLoader(false);
    }, 1500);
    toast(toastStatus, {
      progressClassName: 'fancy-progress-bar',
      position: width! > 768 ? 'bottom-right' : 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function navigateToProductPage() {
    //closeModal();
    router.push(`${lang}/${ROUTES.PRODUCT}/${slug}`);
  }

  useEffect(() => setSelectedQuantity(1), [data.id]);

  return (
    <div className="md:w-[600px] lg:w-[940px] xl:w-[1180px] mx-auto p-1 lg:p-0 xl:p-3 bg-brand-light rounded-md">
      <CloseButton onClick={closeModal} />
      <div className="overflow-hidden">
        <div className="px-2 md:px-5 mb-2 lg:mb-2 pt-4 md:pt-7">
          <div className="lg:flex items-stretch justify-between gap-8">
            <div className="xl:flex  justify-center overflow-hidden">
              {!!gallery?.length ? (
                <ThumbnailCarousel gallery={gallery} lang={lang} />
              ) : (
                <div className="flex items-center justify-center w-auto">
                  <Image
                    src={image?.original ?? productGalleryPlaceholder}
                    alt={name!}
                    width={650}
                    height={590}
                  />
                </div>
              )}
            </div>

            <div className="flex-shrink-0 flex flex-col lg:w-[430px] xl:w-[520px] 2xl:w-[520px]">
              <div className="pt-5 lg:pt-0 pb-5">
                <div className="mb-2 md:mb-2.5 block -mt-1.5">
                  <h2 className="text-lg font-medium transition-colors duration-300 text-brand-dark md:text-xl xl:text-2xl ">
                    {name}
                  </h2>
                </div>
                {unit && isEmpty(variations) ? (
                  <div className="text-sm font-medium md:text-15px">{unit}</div>
                ) : (
                  <VariationPrice
                    selectedVariation={selectedVariation}
                    minPrice={data.min_price}
                    maxPrice={data.max_price}
                    lang={lang}
                  />
                )}

                {isEmpty(variations) && (
                  <div className="flex items-center mt-5">
                    <div className="text-brand font-medium text-base md:text-xl xl:text-[30px]">
                      {price}
                    </div>
                    {discount && (
                      <>
                        <del className="text-sm text-opacity-50 md:text-15px ltr:pl-3 rtl:pr-3 ">
                          {basePrice}
                        </del>
                        <span className="inline-block rounded font-bold text-xs md:text-sm bg-brand-tree bg-opacity-20 text-brand-tree uppercase px-2 py-1 ltr:ml-2.5 rtl:mr-2.5">
                          {discount} {t('text-off')}
                        </span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {Object.keys(variations).map((variation) => {
                return (
                  <ProductAttributes
                    key={`popup-attribute-key${variation}`}
                    variations={variations}
                    attributes={attributes}
                    setAttributes={setAttributes}
                  />
                );
              })}

              <div className="pb-2">
                {/* check that item isInCart and place the available quantity or the item quantity */}
                {isEmpty(variations) && (
                  <>
                    {Number(quantity) > 0 || !outOfStock ? (
                      <span className="text-sm font-medium text-yellow">
                        {t('text-only') +
                          ' ' +
                          quantity +
                          ' ' +
                          t('text-left-item')}
                      </span>
                    ) : (
                      <div className="text-base text-brand-danger whitespace-nowrap">
                        {t('text-out-stock')}
                      </div>
                    )}
                  </>
                )}

                {!isEmpty(selectedVariation) && (
                  <span className="text-sm font-medium text-yellow">
                    {selectedVariation?.is_disable ||
                    selectedVariation.quantity === 0
                      ? t('text-out-stock')
                      : `${
                          t('text-only') +
                          ' ' +
                          selectedVariation.quantity +
                          ' ' +
                          t('text-left-item')
                        }`}
                  </span>
                )}
              </div>

              <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                <Counter
                  variant="single"
                  value={selectedQuantity}
                  onIncrement={() => setSelectedQuantity((prev) => prev + 1)}
                  onDecrement={() =>
                    setSelectedQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                  }
                  disabled={
                    isInCart(item.id)
                      ? getItemFromCart(item.id).quantity + selectedQuantity >=
                        Number(item.stock)
                      : selectedQuantity >= Number(item.stock)
                  }
                  lang={lang}
                />
                <Button
                  onClick={addToCart}
                  className="w-full px-1.5"
                  disabled={!isSelected}
                  loading={addToCartLoader}
                >
                  <CartIcon color="#ffffff" className="ltr:mr-3 rtl:ml-3" />
                  {t('text-add-to-cart')}
                </Button>
                <div className="grid grid-cols-2 gap-2.5">
                  <Button
                    variant="border"
                    onClick={addToWishlist}
                    loading={addToWishlistLoader}
                    className={`group hover:text-brand ${
                      favorite === true && 'text-brand'
                    }`}
                  >
                    {favorite === true ? (
                      <IoIosHeart className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all" />
                    ) : (
                      <IoIosHeartEmpty className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand" />
                    )}

                    {t('text-wishlist')}
                  </Button>
                  <div className="relative group">
                    <Button
                      variant="border"
                      className={`w-full hover:text-brand ${
                        shareButtonStatus === true && 'text-brand'
                      }`}
                      onClick={handleChange}
                    >
                      <IoArrowRedoOutline className="text-2xl md:text-[26px] ltr:mr-2 rtl:ml-2 transition-all group-hover:text-brand" />
                      {t('text-share')}
                    </Button>
                    <SocialShareBox
                      className={`absolute z-10 ltr:right-0 rtl:left-0 w-[300px] md:min-w-[400px] transition-all duration-300 ${
                        shareButtonStatus === true
                          ? 'visible opacity-100 top-full'
                          : 'opacity-0 invisible top-[130%]'
                      }`}
                      shareUrl={productUrl}
                      lang={lang}
                    />
                  </div>
                </div>
              </div>
              <ul className="pt-5 xl:pt-8 flex items-center justify-between">
                <li className="relative inline-flex items-center justify-center text-sm  text-brand-dark text-opacity-80 ltr:mr-2 rtl:ml-2 top-1"></li>
                <li className="inline-block ">
                  {payment && (
                    <ul className="flex flex-wrap justify-center items-center space-x-4 -mb-1.5 md:mb-0 mx-auto md:mx-0 pt-3.5 md:pt-0">
                      {payment?.map((item) => (
                        <li
                          className="mb-2 md:mb-0 transition hover:opacity-80 inline-flex"
                          key={`payment-list--key${item.id}`}
                        >
                          <a
                            href={item.path ? item.path : '/#'}
                            target="_blank"
                            className="inline-flex"
                            rel="noreferrer"
                          >
                            <Image
                              src={item.image}
                              alt={t(item.name)}
                              width={item.width}
                              height={item.height}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>

              <div className="pt-6 xl:pt-8">
                <Heading className="mb-3 lg:mb-3.5">
                  {t('text-product-details')}:
                </Heading>
                <Text variant="small">
                  {description.split(' ').slice(0, 40).join(' ')}
                  {'...'}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
