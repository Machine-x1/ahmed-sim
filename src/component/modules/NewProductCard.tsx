import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
} from '@nextui-org/react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import toast from 'react-hot-toast';
import { BiCartAdd } from 'react-icons/bi';
import { MdOutlineDiscount } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { calculatePercentage } from '@/apps/helpers';
import { setProdctCart } from '@/apps/redux/slice/cartSlice';

import FormattedPrice from './FormattedPrice';

const NewProductCard = ({ item, lang }: { item?: any; lang?: any }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('common');
  const determineLanguage = (): string => {
    if (lang && lang !== '') {
      return lang; // Return the provided 'lang'
    }
    return 'en'; // Return 'en' as the default language
  };

  const languageToUse = determineLanguage();
  const productStatus: any = {
    'out-of-stock': 'out-of-stock',
    'pre-order': 'pre-order',
    'in-stock': 'add-to-cart',
  };
  return (
    <div className="relative  ">
      <Card
        shadow="none"
        // isPressable
        fullWidth
        className=" relative flex h-full w-fit  flex-col overflow-hidden lg:w-full   "
      >
        <Skeleton isLoaded className="rounded-lg">
          <CardBody className="relative flex w-full items-center justify-center overflow-hidden rounded-xl">
            {item?.status === 'out-of-stock' && (
              <div className="absolute left-2 top-2 z-30 flex   rounded-full ">
                <Image
                  src="/images/sold-out.png"
                  alt="sold-out"
                  width={80}
                  height={80}
                  className="fixed  h-20 w-20 object-contain object-center"
                />
              </div>
            )}

            <Link href={`/products/${item?.slug}`}>
              <Image
                className="h-52 max-h-52 w-full min-w-full object-cover object-center"
                src={`https://simrckw.s3.eu-north-1.amazonaws.com/${item?.images[0]}`}
                alt={item?.name[languageToUse] || 'Product image'}
                // width="100%"
                // height="100%"
                width={800}
                isZoomed
                height={600}
                removeWrapper
                sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
          </CardBody>

          <CardFooter className=" mb-2 flex flex-col ">
            <div className="mx-auto  flex w-full flex-col items-center justify-center gap-4">
              <div className=" flex w-full flex-col  items-center justify-between ">
                <h5 className="text-xl tracking-tight text-mainOrange">
                  {item?.name[languageToUse] || item?.name.en}
                </h5>
                <div className="flex items-center justify-between">
                  {item?.old_price !== 0 && (
                    <div className="absolute  right-1 top-1 z-30  rounded-full border-[0.5px] bg-orange-600 px-4 py-1 text-xs text-white">
                      <p className="flex items-center gap-x-1">
                        <span>
                          <MdOutlineDiscount size={20} className="" />
                        </span>
                        {calculatePercentage(item.old_price, item?.price)}% off
                      </p>
                    </div>
                  )}
                  <div className="flex items-center gap-x-2">
                    {item.old_price !== 0 && (
                      <p className="text-sm text-slate-500 line-through">
                        <FormattedPrice amount={item?.old_price} />
                      </p>
                    )}
                    <p className="font-semibold text-orange-600  ">
                      <FormattedPrice amount={item?.price} />
                    </p>
                  </div>
                </div>
                <Button
                  fullWidth
                  radius="lg"
                  type="button"
                  disabled={
                    item.status === 'out-of-stock' ||
                    item.status === 'pre-order'
                  }
                  onClick={() =>
                    dispatch(setProdctCart(item)) &&
                    toast.success(t('add-to-cart'))
                  }
                  className=" flex w-full flex-col items-center justify-center bg-greyColor  "
                  aria-label="add to cart"
                >
                  <span className=" flex w-full items-center  justify-center text-center    ">
                    <span className=" w-full   text-sm font-semibold uppercase text-black">
                      {/* {item.status === 'out-of-stock'
                        ? t('out-of-stock')
                        : t('add-to-cart')} */}
                      {t(`${productStatus[item.status]}`)}
                    </span>
                    <BiCartAdd
                      size={20}
                      className="flex  justify-end text-xl text-hoverTextColor  "
                    />
                  </span>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Skeleton>
      </Card>
    </div>
  );
};

export default NewProductCard;
