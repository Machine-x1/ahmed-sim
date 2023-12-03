/* eslint-disable react/button-has-type */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetOrder } from '@/redux/shoppingSlice';

import FormattedPrice from './FormattedPrice';

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { OrderData } = useSelector((state: any) => state?.shopping);

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amt = 0;
    OrderData?.order?.map((item: any) => {
      amt += item.price * item.quantity;
    });
    setTotalAmount(amt);
  }, [OrderData.order]);

  return (
    <div>
      {OrderData?.order?.length > 0 ? (
        <div>
          <div className="grid grid-cols-7 border-b-[1px] border-b-gray-300 py-2 text-sm font-medium uppercase">
            <p className="col-span-4">Items</p>
            <p className="flex items-center justify-center">Quantity</p>
            <p className="flex items-center justify-center">Unit Price</p>
            <p className="flex items-center justify-center">Amount</p>
          </div>
          <div className="flex flex-col justify-center gap-2 py-2">
            {OrderData?.order?.map((item: any) => (
              <div
                key={item?._id}
                className="grid grid-cols-7 items-center border-b-[1px] border-gray-300 py-2"
              >
                <div className="col-span-4 flex items-start gap-2 text-sm">
                  <Image
                    src={item?.image}
                    alt="product image"
                    width={500}
                    height={500}
                    className="h-12 w-12 object-cover"
                  />
                  <div>
                    <h3 className="mb-.5 text-base font-semibold">
                      {item?.title}
                    </h3>
                    <p>{item?.description}</p>
                  </div>
                </div>
                <p className="flex items-center justify-center">
                  {item?.quantity}
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price} />
                </p>
                <p className="flex items-center justify-center">
                  <FormattedPrice amount={item?.price * item.quantity} />
                </p>
              </div>
            ))}
          </div>
          <div className="border-b-[1px] border-b-gray-300 py-2 text-lg font-medium">
            <p>Payment Details</p>
          </div>
          <p className="py-2">
            Total Paid{' '}
            <span className="text-xl font-semibold">
              <FormattedPrice amount={totalAmount} />
            </span>
          </p>
          <button
            onClick={() => dispatch(resetOrder())}
            className="mt-5 cursor-pointer rounded-md border-[1px] border-gray-500 px-4 py-1 font-medium duration-200 hover:border-orange-600"
          >
            Reset Order
          </button>
        </div>
      ) : (
        <div className="bg-white py-10 text-center text-2xl text-black">
          <p>Nothing to show</p>
          <Link href="/">
            <button className="mt-2 h-12 w-44 rounded-full bg-black text-base font-semibold text-slate-100 duration-300 hover:bg-orange-600">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
