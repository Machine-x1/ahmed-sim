/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */

import { Divider } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useSelector } from 'react-redux';

import type { RootState } from '@/apps/redux/store';
import { Meta } from '@/component/layouts/Meta';
import CartItem from '@/component/modules/CartItem';
import PaymentForm from '@/component/modules/PaymentForm';
import { Main } from '@/component/templates/Main';

const Index = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const { t } = useTranslation('cart');
  const router = useRouter();
  return (
    <Main meta={<Meta />}>
      <div className="mx-auto min-h-screen w-full max-w-screen-xl px-4   py-8   pb-24  xl:px-0">
        {cart.products.length > 0 ? (
          <div className=" w-full  xl:px-0">
            <div className="flex w-full  items-center justify-center gap-y-2 pb-8  ">
              <Divider className=" mx-auto  w-1/3" />
              <span className=" text-center text-xl font-semibold capitalize md:text-3xl">
                {t('shopping-cart')}
              </span>
              <Divider className=" mx-auto w-1/3  " />
            </div>

            <div className="flex h-full w-full flex-col  justify-center gap-5 lg:flex-row">
              <div className="  flex lg:h-[600px] lg:w-2/3">
                <CartItem />
              </div>
              <div className=" lg:h-1/2 lg:w-1/3   ">
                <PaymentForm />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-96 flex-col items-center justify-center gap-y-6 bg-white px-4">
            <p className="w-full border-[1px] border-orange-600 p-2 text-center">
              {t('empty-cart')}
            </p>
            <Link href="/products">
              <button
                onClick={() => router.push('/products')}
                className="rounded-md bg-mainOrange px-6 py-2 text-white duration-200 "
              >
                {t('shop-now')}
              </button>
            </Link>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Index;
