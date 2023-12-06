/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-undef */
import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  Image,
  Tab,
  Tabs,
} from '@nextui-org/react';
import type { Key } from 'react';
import { useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { useDispatch } from 'react-redux';

import type { ProductType } from '@/apps/interface/types';
import { addToCart } from '@/apps/redux/slice/shoppingSlice';

import FormattedPrice from './FormattedPrice';

const ProductPage = ({ product }: { product: ProductType }) => {
  const dispatch = useDispatch();
  function getCharactersBeforeDot(text: string) {
    const match = text.match(/([^.]*)\./);
    return match ? match[1] : ''; // Returns the characters before the dot or an empty string if there's no match
  }
  const subDescription = getCharactersBeforeDot(product?.description);
  const [currentImg, setCurrentImg] = useState<any>(0);

  const renderImageCards = () => {
    if (!product?.images || !Array.isArray(product.images)) {
      return null;
    }

    return product.images.slice(1).map((imageSrc: string, index: Key) => {
      if (!imageSrc) {
        return null;
      }

      const handleClick = () => setCurrentImg(Number(index) + 1);

      return (
        <Card
          key={index}
          isHoverable
          isPressable
          radius="lg"
          fullWidth
          onClick={handleClick}
          className="h-32 w-32 border-none"
        >
          <Image
            className="h-32 w-full object-cover object-center"
            src={imageSrc}
            alt=""
            width="100%"
            height="100%"
          />
        </Card>
      );
    });
  };
  return (
    <div>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs isDisabled>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>product</BreadcrumbItem>
            <BreadcrumbItem> {product?.name}</BreadcrumbItem>
          </Breadcrumbs>
          <div className="lg:col-gap-12  xl:col-gap-16 mt-8  grid grid-cols-1 gap-8  lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className=" lg:col-span-3 lg:row-end-1">
              <div className=" lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="h-96 max-w-xl overflow-hidden rounded-lg">
                    <Image
                      className="h-full w-full max-w-full object-cover"
                      src={product?.images[currentImg]}
                      width="100%"
                      height="100%"
                      alt=""
                    />
                  </div>
                </div>

                <div className=" mt-2 w-full    lg:order-1 lg:w-32 lg:shrink-0">
                  <div className="flex w-full items-start   justify-center  gap-2 lg:flex-col">
                    {renderImageCards()}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="md: text-2xl font-bold text-gray-900 md:text-3xl">
                {product?.name}
              </h1>
              <div className="mt-5 flex  flex-col  ">
                <p className="text-md  font-medium text-gray-500">
                  {/* {product?.description} */}
                  here is the sub description before first full stop
                  {subDescription}
                </p>
              </div>

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-y py-4 md:flex-row md:space-y-0">
                <div className="flex items-end">
                  <p className="text-xl font-semibold">
                    <FormattedPrice amount={product?.price} />
                  </p>
                </div>
                <div
                  onClick={
                    () => dispatch(addToCart(product))
                    // toast.success(
                    //   `${product?.title.substring(0, 15)} added successfully!`
                    // )
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
                      strokeLinejoin="round"
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
                      strokeLinejoin="round"
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
                >
                  <Tab
                    key="Description"
                    title={
                      <div className="flex w-full items-center space-x-2">
                        <span className="text-md  font-medium text-gray-900  hover:text-gray-800">
                          Item details
                        </span>
                      </div>
                    }
                  >
                    <div className="flow-root ">
                      <p className="text-lightText">{product?.description}</p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* <Toaster /> */}
      </section>
    </div>
  );
};

export default ProductPage;
