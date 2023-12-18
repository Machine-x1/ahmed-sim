/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import { Divider, Image } from '@nextui-org/react';
import React from 'react';
// import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import type { ProductType } from '@/apps/interface/types';
import { deleteProductCart } from '@/apps/redux/slice/cartSlice';
import type { RootState } from '@/apps/redux/store';

import FormattedPrice from './FormattedPrice';

const CartItem = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto max-h-full w-full ">
      <div className="mb-6 flex h-full flex-col justify-center gap-y-2 overflow-auto rounded-lg bg-white p-6   shadow-md sm:flex sm:justify-start ">
        {cart.products.map((item: ProductType) => (
          <div
            key={item._id}
            className="relative flex w-full flex-col items-center justify-between gap-4 bg-white p-4 "
          >
            <div className="relative flex  w-full items-center gap-x-3  ">
              <Image
                src={item?.images[0]}
                width="100%"
                height="100%"
                alt=""
                radius="lg"
                className=" h-24 w-24 object-cover  object-center"
                loading="lazy"
              />
              <div
                onClick={() => dispatch(deleteProductCart(item._id))}
                className="absolute end-12 top-2 flex  "
              >
                <span className="cursor-pointer text-lg duration-200 hover:text-red-600">
                  <IoMdClose />
                </span>
              </div>
              <div className="flex flex-col flex-wrap items-center justify-center gap-4 font-medium text-gray-900 sm:flex-row">
                <h3>{item?.name.en}</h3>
                <p className="ml-4">
                  <FormattedPrice amount={item.price} />
                </p>
                {/* <p className=" text-sm text-gray-500">{item?.color}</p> */}
                <div className="flex  items-center justify-between text-sm">
                  {/* <p className="text-gray-500">Qty: 32{item?.quantity}</p> */}
                </div>
              </div>
              {/* quantity */}
              {/* <div className=" absolute  end-1/4 top-auto flex w-20 items-center  justify-center  border border-slate-300 p-2 ">
                <div className="flex w-10 items-center  justify-center ">
                  <span className="cursor-pointer">
                    <FiChevronLeft size={25} />
                  </span>
                  <span className="cursor-pointer">
                    <FiChevronRight size={25} />
                  </span>
                </div>
              </div> */}
            </div>
            <Divider className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
