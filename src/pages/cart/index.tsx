/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */

import { Divider } from '@nextui-org/react';
import Link from 'next/link';

import CartItem from '@/component/modules/CartItem';
import PaymentForm from '@/component/modules/PaymentForm';

const index = () => {
  // const { productStore } = useSelector((state: any) => state?.shopping);
  // const dispatch = useDispatch();
  return (
    <div className="mx-auto  h-screen   max-w-screen-xl px-4 py-8 xl:px-0">
      {1 ? (
        <div className=" w-full  xl:px-0">
          <div className="flex w-full  flex-col gap-y-2 pb-8  ">
            <h2 className="mb-2 text-3xl font-bold  capitalize">
              Shopping Cart
            </h2>
            <Divider className="my-2 w-1/2" />
          </div>

          <div className="flex w-full flex-row justify-between gap-5">
            <div className="flex w-2/3">
              <CartItem />
            </div>
            {/* Payment Form */}
            <div className="w-1/3">
              <PaymentForm />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-96 flex-col items-center justify-center gap-y-6 bg-white px-4">
          <p className="w-full border-[1px] border-orange-600 p-2 text-center">
            Your product cart is currently empty
          </p>
          <Link href="/">
            <button className="rounded-md bg-mainOrange px-6 py-2 text-white duration-200 ">
              Return to Shop
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default index;
