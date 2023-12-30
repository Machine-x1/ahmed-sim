/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
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
import router from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import type { Key } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineStock } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io';
import { MdFreeCancellation, MdProductionQuantityLimits } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { setProdctCart } from '@/apps/redux/slice/cartSlice';

import FormattedPrice from './FormattedPrice';

const ProductPage = ({ product, lang }: { product: any; lang: any }) => {
  const { t } = useTranslation('common');

  const [preOrderStatus, setPreOrderStatus] = useState('Pre-Order'); // Initial button text

  const handlePreOrder = async (preOrderProduct: any) => {
    const totalPrice = preOrderProduct?.price;

    setPreOrderStatus('Processing...');

    try {
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      // make a whatsapp message with the products and total price
      // const totalPrice = total.toFixed(2);
      const purchasedProducts = preOrderProduct?.name.en;

      const message = `pre-order Summary \n Total Price: $${totalPrice} \nProducts: ${purchasedProducts}`;
      const phoneNumber = '+96569399851';
      const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
        message
      )}`;

      router.push(whatsappLink);
      setPreOrderStatus('Pre-Ordered');
      toast.success(t(`toast-pre-order`));
    } catch (error) {
      console.error('Error:', error);
      // setPreOrderStatus('Failed');
      toast.error(t(`toast-pre-order-error`));
    }
  };
  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState<any>(0);
  const renderImageCards = () => {
    if (!product?.images || !Array.isArray(product.images)) {
      return null;
    }

    return product.images.slice(0, 3).map((imageSrc: string, index: Key) => {
      if (!imageSrc) {
        return null;
      }

      const handleClick = () => setCurrentImg(Number(index));

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
            src={`https://simrckw.s3.eu-north-1.amazonaws.com/${imageSrc}`}
            alt={product?.name.en}
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
            <BreadcrumbItem>{t(`Home`)}</BreadcrumbItem>
            <BreadcrumbItem>{t(`Product`)}</BreadcrumbItem>
            <BreadcrumbItem> {product?.name[lang]}</BreadcrumbItem>
          </Breadcrumbs>

          <div className="lg:col-gap-12  xl:col-gap-16 mt-8  grid grid-cols-1 gap-8  lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="  lg:col-span-3 lg:row-end-1 ">
              <div className=" lg:flex lg:items-start lg:gap-12">
                <div className=" lg:order-2 lg:ml-5">
                  <div className=" h-[460px] min-h-[460px] w-full  overflow-hidden rounded-lg lg:w-[580px]  ">
                    <Image
                      className="w-xl h-[460px] min-w-full  object-contain  object-center"
                      src={`https://simrckw.s3.eu-north-1.amazonaws.com/${product?.images[currentImg]}`}
                      width="100%"
                      height="100%"
                      removeWrapper
                      alt={product?.name[lang]}
                    />
                  </div>
                </div>

                <div className=" mt-4 w-full  lg:order-1 lg:w-32  lg:shrink-0 ">
                  <div className="flex  w-full items-start justify-center gap-4 lg:flex-col">
                    {renderImageCards()}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className=" text-2xl font-bold text-gray-900 md:text-3xl">
                {product?.name[lang]}
              </h1>
              {product?.status === 'out-of-stock' && (
                <div className="mt-5 flex  flex-col  ">
                  <p className="flex  items-center text-xl  font-medium text-gray-500">
                    <span className="mr-2 h-5 w-5  rounded-full  bg-red-500" />
                    <span className="ml-2"> {t('out-of-stock')}</span>
                  </p>
                </div>
              )}

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-y py-4 md:flex-row md:space-y-0">
                <div className="flex items-end">
                  <p className="text-xl font-semibold">
                    {/* <FormattedPrice amount={product?.price} /> */}
                    <div className="flex items-center gap-x-2">
                      {product.old_price !== 0 ? (
                        <p className="text-sm text-slate-500 line-through">
                          <FormattedPrice amount={product?.old_price} />
                        </p>
                      ) : null}
                      <p className="font-semibold text-orange-600  ">
                        <FormattedPrice amount={product?.price} />
                      </p>
                    </div>
                  </p>
                </div>
                {product?.status === 'in-stock' ? (
                  <div
                    onClick={() =>
                      dispatch(setProdctCart(product)) &&
                      toast.success(t('done'))
                    }
                    className="group flex cursor-pointer items-center"
                  >
                    <div className="flex items-center border-r-[1px] border-r-slate-500 bg-darkText px-6 py-3 text-sm uppercase text-slate-100">
                      {t('add-to-cart')}
                    </div>
                    <span className="flex w-12 items-center justify-center bg-hoverTextColor py-3 text-xl text-slate-100 duration-200 group-hover:bg-orange-500">
                      <IoMdCart />
                    </span>
                  </div>
                ) : product?.status === 'pre-order' ? (
                  <button
                    onClick={() => handlePreOrder(product)}
                    disabled={preOrderStatus !== 'Pre-Order'}
                    className="group flex cursor-pointer items-center"
                  >
                    <div className="flex items-center border-r-[1px] border-r-slate-500 bg-darkText px-6 py-3 text-sm uppercase text-slate-100">
                      {t(preOrderStatus)}
                    </div>
                    <span className="flex w-12 items-center justify-center bg-hoverTextColor py-3 text-xl text-slate-100 duration-200 group-hover:bg-orange-500">
                      <IoMdCart />
                    </span>
                  </button>
                ) : (
                  product?.status === 'out-of-stock' && (
                    <div className="group flex cursor-pointer items-center">
                      <div className="flex items-center border-r-[1px] border-r-slate-500 bg-greyColor  px-6 py-3 text-sm uppercase text-secondaryBlack">
                        {t('out-of-stock')}
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="flex gap-4  text-sm text-lightText">
                <span>
                  SKU: <span className="text-darkText">{product?._id}</span>
                </span>
                <span>
                  {t('category')}:
                  <span className="text-darkText">{product?.category}</span>
                </span>
              </div>
              <ul className="mt-8 flex flex-col gap-4  ">
                <li className="text-md flex items-center gap-2 text-left font-medium text-gray-600">
                  <MdFreeCancellation className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  {t('cancel-anytime')}
                </li>
                <li className="text-md flex items-center gap-2 text-left font-medium text-gray-600">
                  <MdProductionQuantityLimits className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  {t('quantity-available')}:
                  {product?.quantity === 0 || product?.quantity === undefined
                    ? t(`out-of-stock`)
                    : product?.quantity}
                </li>
                <li className="text-md flex items-center gap-2 text-left font-medium text-gray-600">
                  <AiOutlineStock className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  {t('status')}:
                  {product?.status === 'in-stock'
                    ? t(`in-stock`)
                    : product?.status === 'pre-order'
                    ? t('pre-order')
                    : t('out-of-stock')}
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
                          {t('product-details')}
                        </span>
                      </div>
                    }
                  >
                    <div className="flow-root ">
                      <p className="text-lightText">
                        {product?.description[lang]}
                      </p>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
