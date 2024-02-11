/* eslint-disable no-underscore-dangle */
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineStock } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io';
import { MdFreeCancellation, MdProductionQuantityLimits } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { setProdctCart } from '@/apps/redux/slice/cartSlice';

import BreadcrumbsComponent from './BreadcrumbsComponent';
import FormattedPrice from './FormattedPrice';
import ProductImages from './ProductImages';
import ProductTabs from './ProductTabs';

const ProductPage = ({ product, lang }: { product: any; lang: string }) => {
  const { t } = useTranslation('common');

  const dispatch = useDispatch();
  const [currentImg, setCurrentImg] = useState<any>(0);

  return (
    <div>
      <section className="py-12 md:py-16">
        <div className=" mx-auto px-4">
          <BreadcrumbsComponent product={product} lang={lang} />

          <div className="  mt-8 grid  grid-cols-1 gap-8 lg:mt-12  lg:grid-cols-5 lg:gap-16 xl:gap-16">
            <div className="  lg:col-span-3 lg:row-end-1 ">
              <ProductImages
                product={product}
                currentImg={currentImg}
                setCurrentImg={setCurrentImg}
                lang={lang}
              />
            </div>

            {/* // refactor this part */}
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

                {product?.status === 'in-stock' && (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(setProdctCart(product));
                      toast.success(t('done'));
                    }}
                    className="group flex cursor-pointer items-center"
                  >
                    <div className="flex items-center border-r-[1px] border-r-slate-500 bg-darkText px-6 py-3 text-sm uppercase text-slate-100">
                      {t('add-to-cart')}
                    </div>
                    <span className="flex w-12 items-center justify-center bg-hoverTextColor py-3 text-xl text-slate-100 duration-200 group-hover:bg-orange-500">
                      <IoMdCart />
                    </span>
                  </button>
                )}

                {product?.status === 'pre-order' && (
                  <button
                    type="button"
                    // onClick={() => handlePreOrder(product)}
                    // disabled={preOrderStatus !== 'Pre-Order'}
                    className="group flex cursor-pointer items-center"
                  >
                    <div className="flex items-center border-r-[1px] border-r-slate-500 bg-darkText px-6 py-3 text-sm uppercase text-slate-100">
                      {/* {t(preOrderStatus)} */}
                    </div>
                    <span className="flex w-12 items-center justify-center bg-hoverTextColor py-3 text-xl text-slate-100 duration-200 group-hover:bg-orange-500">
                      <IoMdCart />
                    </span>
                  </button>
                )}
                {product?.status === 'out-of-stock' && (
                  <div className="group flex cursor-pointer items-center">
                    <div className="flex items-center border-r-[1px] border-r-slate-500 bg-greyColor  px-6 py-3 text-sm uppercase text-secondaryBlack">
                      {t('out-of-stock')}
                    </div>
                  </div>
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
                <li className="flex items-center gap-2 text-left font-medium text-gray-600">
                  <MdFreeCancellation className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  {t('cancel-anytime')}
                </li>
                <li className="flex items-center gap-2 text-left font-medium text-gray-600">
                  <MdProductionQuantityLimits className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  {t('quantity-available')}:
                  {product?.quantity === 0 || product?.quantity === undefined
                    ? t(`out-of-stock`)
                    : product?.quantity}
                </li>
                <li className="flex items-center gap-2 text-left font-medium text-gray-600">
                  <AiOutlineStock className="mr-2 block h-5 w-5 align-middle text-gray-500" />
                  {t('status')}:
                  {product?.status === 'in-stock' && t(`in-stock`)}
                  {product?.status === 'pre-order' && t('pre-order')}
                  {product?.status === 'out-of-stock' && t('out-of-stock')}
                </li>
              </ul>
            </div>
            {/* end of shit */}
            <div className="lg:col-span-3">
              <ProductTabs product={product} lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
