/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from '@/redux/shoppingSlice';

import FormattedPrice from './FormattedPrice';

const CartItem = () => {
  const { productData } = useSelector((state: any) => state?.shopping);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto max-h-screen w-full  overflow-auto ">
      <div className="mb-6 flex h-full flex-col justify-center gap-y-2 overflow-auto rounded-lg bg-white p-6   shadow-md sm:flex sm:justify-start ">
        {productData?.map((item: any) => (
          <div
            key={item._id}
            className="relative flex w-full flex-col items-center justify-between gap-4 bg-white p-4 "
          >
            <div className="relative flex  w-full items-center gap-x-3  ">
              <Image
                src={item?.image}
                width={100}
                height={100}
                alt="product image"
                className=" object-cover  object-center"
                loading="lazy"
              />
              <div className="absolute end-12 top-2 flex  ">
                <span
                  onClick={() => dispatch(deleteProduct(item?._id))}
                  className="cursor-pointer text-lg duration-200 hover:text-red-600"
                >
                  <IoMdClose />
                </span>
              </div>
              <div className="flex flex-col justify-between gap-2 text-base font-medium text-gray-900">
                <h3>
                  <a href={item?.href}>{item?.title}</a>
                </h3>
                <p className="ml-4">
                  <FormattedPrice amount={item.price} />
                </p>
                <p className="mt-1 text-sm text-gray-500">{item?.color}</p>
                <div className="flex  items-end justify-between text-sm">
                  <p className="text-gray-500">Qty: {item?.quantity}</p>
                </div>
              </div>
              {/* quantity */}
              <div className=" absolute end-1/2  flex  w-full   border border-slate-300 p-2 md:w-auto">
                <div className="flex w-10 items-center  justify-center ">
                  <span
                    onClick={() => dispatch(decreaseQuantity(item))}
                    className="cursor-pointer"
                  >
                    <FiChevronLeft />
                  </span>
                  <span>{item?.quantity}</span>
                  <span
                    onClick={() => dispatch(increaseQuantity(item))}
                    className="cursor-pointer"
                  >
                    <FiChevronRight />
                  </span>
                </div>
              </div>
            </div>
            <Divider className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
