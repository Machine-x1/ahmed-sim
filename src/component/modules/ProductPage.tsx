/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */

'use client';

import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Image,
  Tab,
  Tabs,
} from '@nextui-org/react';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoIosStar, IoMdCart } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import { addToCart } from '@/redux/shoppingSlice';

import FormattedPrice from './FormattedPrice';
// import { error } from 'console';
const ProductPage = ({ product }: any) => {
  const dispatch = useDispatch();
  const startArray = Array.from({ length: product?.rating }, (_, index) => (
    <span key={index} className="text-yellow-400">
      <IoIosStar />
    </span>
  ));

  const tabs = [
    {
      id: 'photos',
      label: 'Photos',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 'music',
      label: 'Music',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
  type ImagesPath = {
    [key: number]: string;
  };

  type CurrentImgState = number;
  const imagesPath: ImagesPath = {
    0: '/images/scaled.jpg',
    1: '/images/steer2.jpg',
    2: '/images/scaled.jpg',
    3: '/images/scale2.jpg',
  };

  const [currentImg, setCurrentImg] = useState<CurrentImgState>(0);
  // if (product?.id === undefined) {
  //   <Error statusCode={404} title="id not available" withDarkMode />;
  // }
  return (
    <div>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs isDisabled>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>product</BreadcrumbItem>
            <BreadcrumbItem> {product?.title}</BreadcrumbItem>
          </Breadcrumbs>
          <div className="lg:col-gap-12  xl:col-gap-16 mt-8  grid grid-cols-1 gap-8  lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className=" lg:col-span-3 lg:row-end-1">
              <div className=" lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="max-w-xl overflow-hidden rounded-lg">
                    <Image
                      className="h-full w-full max-w-full object-cover"
                      src={imagesPath[currentImg]}
                      alt=""
                    />
                  </div>
                </div>

                <div className=" mt-2 w-full   lg:order-1 lg:w-32 lg:shrink-0">
                  <div className="mx-auto flex w-full items-start   gap-2  sm:flex-col lg:flex-col">
                    <Button
                      onClick={() => setCurrentImg(2)}
                      radius="lg"
                      fullWidth
                      className="flex-0 mb-3 aspect-square h-20 overflow-hidden  border border-transparent text-center"
                    >
                      <Image
                        className="h-full w-full  object-cover object-center"
                        src={imagesPath[1]}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Button>
                    <Button
                      onClick={() => setCurrentImg(2)}
                      radius="lg"
                      fullWidth
                      className="flex-0 mb-3 aspect-square h-20 overflow-hidden  border border-transparent text-center"
                    >
                      <Image
                        className="h-full w-full object-cover object-center"
                        src={imagesPath[2]}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Button>
                    <Button
                      onClick={() => setCurrentImg(3)}
                      fullWidth
                      radius="lg"
                      className="flex-0 mb-3 aspect-square h-20 overflow-hidden  border border-transparent text-center"
                    >
                      <Image
                        className="h-full w-full object-cover object-center"
                        src={imagesPath[3]}
                        alt=""
                        width="100%"
                        height="100%"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="md: text-2xl font-bold text-gray-900 md:text-3xl">
                {product?.title}
              </h1>
              <div className="mt-5 flex items-center">
                <div className="flex items-center">{startArray}</div>
                {/* <p className="text-md ml-2 font-medium text-gray-500">
                  1,209 Reviews
                </p> */}
              </div>
              <h2 className="mt-8 text-base text-gray-900">model Type</h2>
              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input
                    type="radio"
                    name="type"
                    value="Powder"
                    className="peer sr-only"
                    checked
                  />
                  <p className="rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white">
                    Powder
                  </p>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="type"
                    value="Whole Bean"
                    className="peer sr-only"
                  />
                  <p className="rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white">
                    Whole Bean
                  </p>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="type"
                    value="Groud"
                    className="peer sr-only"
                  />
                  <p className="rounded-lg border border-black px-6 py-2 font-bold peer-checked:bg-black peer-checked:text-white">
                    Groud
                  </p>
                </label>
              </div>
              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-y py-4 md:flex-row md:space-y-0">
                <div className="flex items-end">
                  <p className="text-xl font-semibold">
                    <FormattedPrice amount={product?.price} />
                  </p>
                </div>
                <div
                  onClick={() =>
                    dispatch(addToCart(product)) &&
                    toast.success(
                      `${product?.title.substring(0, 15)} added successfully!`,
                    )
                  }
                  className="group flex cursor-pointer items-center"
                >
                  <button className="flex items-center border-r-[1px] border-r-slate-500 bg-darkText px-6 py-3 text-sm uppercase text-slate-100">
                    add to cart
                  </button>
                  <span className="flex w-12 items-center justify-center bg-hoverTextColor py-3 text-xl text-slate-100 duration-200 group-hover:bg-orange-500">
                    <IoMdCart />
                  </span>
                </div>
              </div>

              <div className="flex gap-4  text-sm text-lightText">
                <span>
                  SKU: <span className="text-darkText">{product?._id}</span>
                </span>
                <span>
                  Category:
                  <span className="text-darkText">{product?.category}</span>
                </span>
              </div>
              <ul className="mt-8 space-y-2">
                <li className="text-md flex items-center text-left font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    />
                  </svg>
                  Free shipping worldwide
                </li>

                <li className="text-md flex items-center text-left font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    />
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <div className="flex w-full  flex-col">
                <Tabs
                  aria-label="Options"
                  variant="underlined"
                  classNames={{
                    tabList:
                      'gap-6 w-full  relative rounded-none p-0 border-b border-divider  text-md font-medium text-gray-900 hover:text-gray-8',

                    cursor: 'w-full',
                    tab: 'max-w-fit px-0  h-12',
                    tabContent: 'group-data-[selected=true]:text-lightText',
                  }}
                  items={tabs}
                >
                  <Tab
                    key="Description"
                    title={
                      <div className="flex w-full items-center space-x-2">
                        <span className="text-md  font-medium text-gray-900  hover:text-gray-800">
                          Description
                        </span>
                      </div>
                    }
                  >
                    <div className="mt-8 flow-root md:mt-12">
                      <p className="text-lightText">{product?.description}</p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </div>
  );
};

export default ProductPage;
