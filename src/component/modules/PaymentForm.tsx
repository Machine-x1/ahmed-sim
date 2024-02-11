import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useSelector } from 'react-redux';

import type { RootState } from '@/apps/redux/store';

import FormattedPrice from './FormattedPrice';

const PaymentForm = () => {
  const router = useRouter();
  const { t } = useTranslation('cart');
  const { cart } = useSelector((state: RootState) => state.cart);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cart.products) {
      totalPrice += product.price * product.purchased_quantity;
    }
    return totalPrice;
  };
  const total = calculateTotalPrice();

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
      <h2 className="mb-2 font-semibold uppercase  ">{t('order-summary')}</h2>
      <div className=" border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light  uppercase">{t('subtotal')}</p>
          <p>
            <FormattedPrice amount={total} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light ">{t('shipping')}</p>
        </div>
      </div>

      <Button
        onClick={() => router.push('/checkout')}
        className="mt-4 w-full cursor-pointer bg-mainOrange px-6 py-3 text-slate-100 duration-200 "
      >
        Checkout
      </Button>
    </div>
  );
};

export default PaymentForm;
