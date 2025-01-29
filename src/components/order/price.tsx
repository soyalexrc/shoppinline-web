import usePrice from '@framework/product/use-price';
import {calculateTotal, CartItem} from '@contexts/cart/cart.utils';

export type TotalPriceItem = {
    products: CartItem[];
    delivery_fee: number;
    discount: number;
}

export type DiscountPriceItem = {
  discount: number;
}

export type DeliveryItem = {
  delivery: number
}

export const TotalPrice: React.FC<{ items?: TotalPriceItem }> = ({ items }) => {
  const { price } = usePrice({
    amount: Math.round(
      calculateTotal(items?.products) + items?.delivery_fee - items?.discount,
    ),
    currencyCode: 'USD',
  });
  return <span className="total_price">{price}</span>;
};

export const DiscountPrice = (discount: DiscountPriceItem) => {
  const { price } = usePrice({
    amount: discount?.discount,
    currencyCode: 'USD',
  });
  return <>-{price}</>;
};

export const DeliveryFee = (delivery: DeliveryItem) => {
  const { price } = usePrice({
    amount: delivery?.delivery,
    currencyCode: 'USD',
  });
  return <>{price}</>;
};

export const SubTotalPrice: React.FC<{ items?: CartItem[] }> = ({ items }) => {
  const { price } = usePrice({
    amount: calculateTotal(items),
    currencyCode: 'USD',
  });
  return <>{price}</>;
};
