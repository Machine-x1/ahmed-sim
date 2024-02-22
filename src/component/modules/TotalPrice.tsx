import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import type { RootState } from '@/apps/redux/store';

import FormattedPrice from './FormattedPrice';

/* eslint-disable tailwindcss/no-custom-classname */
const TotalPrice = ({ shipping }: { shipping: number }) => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const lang: any = router.locale;
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cart.products) {
      totalPrice += product.price * product.purchased_quantity;
    }
    return totalPrice;
  };
  const total = calculateTotalPrice();

  return (
    <div className="text-dark-gray w-full sm:w-[360px]">
      <h3 className="mb-8 text-lg font-semibold">Checkout overview</h3>
      {cart.products.map((item: any) => (
        <>
          <div className="mb-4 flex items-center justify-between">
            <span>
              <div className="flex flex-col flex-wrap items-center justify-center gap-4 font-medium text-gray-900 sm:flex-row">
                <h3>{item?.name[lang] || item?.name.en}</h3>
                <div className="flex  items-center justify-between text-xs">
                  <p className="text-gray-500">
                    Qty: {item?.purchased_quantity}
                  </p>
                </div>
              </div>
            </span>
            <span>
              <FormattedPrice
                amount={(item.price ?? 0) * (item?.purchased_quantity ?? 0)}
              />
            </span>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <span>shipment</span>

            <span>
              <FormattedPrice amount={3} />
            </span>
          </div>
          <div className="mb-1 flex items-center justify-between font-semibold">
            <span>Total</span>
            <span>
              <FormattedPrice amount={total + shipping} />
            </span>
          </div>
        </>
      ))}
    </div>
  );
};
export default TotalPrice;
