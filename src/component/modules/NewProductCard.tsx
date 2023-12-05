/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */

// 'use client';

import { Card, CardBody, CardFooter, Image, Skeleton } from '@nextui-org/react';
import Link from 'next/link';
// import product from 'next-seo/lib/jsonld/product';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdCart } from 'react-icons/io';
import { useDispatch } from 'react-redux';

// import { addToCart } from '@/redux/cartSlice';
import type { Product } from '@/apps/interface/types';
import { addToCart } from '@/apps/redux/slice/shoppingSlice';

import FormattedPrice from './FormattedPrice';

const NewProductCard = ({ item }: { item?: Product | any }) => {
  const dispatch = useDispatch();
  return (
    <Card
      shadow="none"
      isPressable
      onPress={() => console.log('item pressed')}
      fullWidth
      className=" flex h-full w-full flex-col overflow-hidden  "
    >
      <Skeleton isLoaded className="rounded-lg">
        <CardBody className=" flex  w-full items-center justify-center rounded-xl">
          <Link href={`/product/ ${item?._id}`}>
            <Image
              className=" h-full w-full overflow-hidden object-cover  object-center"
              src="/images/pr1.jpeg"
              alt="product image"
              removeWrapper
            />
          </Link>
        </CardBody>

        <CardFooter className=" mb-2 ">
          <div className="mx-auto  flex w-full flex-col items-center justify-center gap-2">
            <div className=" w-fulll flex  items-center justify-between gap-8">
              <h5 className="text-xl tracking-tight text-mainOrange">
                {item.name}
              </h5>
              <p className=" end-0  flex items-center justify-end">
                <span className="text-lg font-bold text-mainOrange">
                  <FormattedPrice amount={item?.price} />
                </span>
                {/* <span className="text-sm text-mainOrange line-through">
                  <FormattedPrice amount={item?.oldprice} />{' '}
                </span> */}
              </p>
            </div>
            <button
              onClick={(e: any) =>
                e.preventDefault() &&
                dispatch(addToCart(item)) &&
                toast.success(
                  `${item?.name.substring(0, 15)} added successfully!`
                )
              }
              className="flex h-10 w-full items-center  justify-center border border-transparent bg-hoverTextColor  text-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <IoMdCart className="text-xl" />
              <span> Add to cart</span>
            </button>
          </div>
        </CardFooter>
      </Skeleton>
      <Toaster position="top-center" reverseOrder={false} />
    </Card>
  );
};

export default NewProductCard;
