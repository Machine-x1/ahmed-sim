/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable tailwindcss/no-custom-classname */

import { Card, CardBody, CardFooter, Image, Skeleton } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
// import product from 'next-seo/lib/jsonld/product';
import toast from 'react-hot-toast';
import { BiCart } from 'react-icons/bi';
import { useDispatch } from 'react-redux';

import { setProdctCart } from '@/apps/redux/slice/cartSlice';

import FormattedPrice from './FormattedPrice';

// const NewProductCard = ({ item, lang }: { item?: ProductType; lang: any }) => {
const NewProductCard = ({ item, lang }: { item?: any; lang: any }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation('common');
  // const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <div className="relative">
      <motion.div
        className=""
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card
          shadow="none"
          // isPressable
          fullWidth
          className=" relative flex   w-full flex-col overflow-hidden  "
        >
          {isHovered && (
            <motion.button
              whileHover={{ scale: 1.1 }} // Framer Motion animation on hover
              className="  absolute left-2 top-1   z-20 flex items-center justify-center duration-300 transition-opacity hover:opacity-100"
            >
              <button
                // role="presentation"
                onClick={() =>
                  dispatch(setProdctCart(item)) &&
                  toast.success(t('add-to-cart'))
                }
                className=" flex w-full flex-col items-center justify-center "
              >
                <BiCart size={40} className="text-xl text-hoverTextColor" />
                <span className="text-sm  uppercase text-secondaryBlack">
                  Add to cart
                </span>
              </button>
            </motion.button>
          )}
          <Skeleton isLoaded className="rounded-lg">
            <CardBody className=" relative flex h-80   w-full items-center justify-center overflow-hidden rounded-xl">
              <Link href={`/products/${item?.slug}`}>
                <Image
                  className=" h-89 w-full  object-cover  object-center"
                  src={item?.images[0]}
                  alt="product image"
                  removeWrapper
                />
              </Link>
            </CardBody>

            <CardFooter className=" mb-2 flex flex-col ">
              <div className="mx-auto  flex w-full flex-col items-center justify-center gap-2">
                <div className=" w-fulll flex flex-col  items-center justify-between ">
                  <h5 className="text-xl tracking-tight text-mainOrange">
                    {item?.name[lang] || item?.name.en}
                  </h5>
                  <p className="  flex items-center justify-end">
                    <span className="text-lg font-bold text-orange-500">
                      <FormattedPrice amount={item?.price} />
                    </span>
                  </p>
                </div>
              </div>
            </CardFooter>
          </Skeleton>
        </Card>
      </motion.div>
      {/* <Toaster /> */}
    </div>
  );
};

export default NewProductCard;
