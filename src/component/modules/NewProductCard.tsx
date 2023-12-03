/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
} from '@nextui-org/react';
import Link from 'next/link';
// import product from 'next-seo/lib/jsonld/product';
import toast, { Toaster } from 'react-hot-toast';
import { IoMdCart } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import { addToCart } from '@/redux/shoppingSlice';

import FormattedPrice from './FormattedPrice';

const NewProductCard = ({ item }: any) => {
  const dispatch = useDispatch();
  return (
    <Card
      shadow="none"
      isPressable
      onPress={() => console.log('item pressed')}
      key={item.id}
      fullWidth
      className=" flex h-full w-full flex-col overflow-hidden  "
    >
      <Skeleton isLoaded className="rounded-lg">
        <CardBody className=" flex  w-full items-center justify-center rounded-xl">
          <Link href={{ pathname: '/product', query: { _id: item?._id } }}>
            <Image
              className=" h-full w-full overflow-hidden object-cover  object-center"
              src="/images/scaled.jpg"
              alt="product image"
              removeWrapper
            />
          </Link>
        </CardBody>

        <CardFooter className=" mb-4 ">
          <div className="mx-auto  flex w-full flex-col items-center justify-center gap-4">
            <div className=" flex flex-col items-center justify-between gap-2">
              <h5 className="text-mainOrange text-xl tracking-tight">
                {item.title}
              </h5>
              <p>
                <span className="text-mainOrange text-3xl font-bold">
                  <FormattedPrice amount={item?.price} />
                </span>
                <span className="text-mainOrange text-sm line-through">
                  <FormattedPrice amount={item?.oldprice} />{' '}
                </span>
              </p>
            </div>
            <Button
              radius="none"
              onClick={(e: any) =>
                e.preventDefault() &&
                dispatch(addToCart(item)) &&
                toast.success(
                  `${item?.title.substring(0, 15)} added successfully!`
                )
              }
              className="bg-hoverTextColor flex w-full items-center  justify-center border border-transparent  text-center text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <IoMdCart className="text-xl" />
              <span> Add to cart</span>
            </Button>
          </div>
        </CardFooter>
      </Skeleton>
      <Toaster />
    </Card>
  );
};

export default NewProductCard;
