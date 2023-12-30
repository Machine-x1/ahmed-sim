/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */

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
// import product from 'next-seo/lib/jsonld/product';
import toast from 'react-hot-toast';
import { BiCartAdd } from 'react-icons/bi';
import { MdOutlineDiscount } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { calculatePercentage } from '@/apps/helpers';
import { setProdctCart } from '@/apps/redux/slice/cartSlice';

import FormattedPrice from './FormattedPrice';

// const NewProductCard = ({ item, lang }: { item?: ProductType; lang: any }) => {
const NewProductCard = ({ item, lang }: { item?: any; lang?: any }) => {
  const dispatch = useDispatch();
  // const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation('common');
  // const { cart } = useSelector((state: RootState) => state.cart);
  const determineLanguage = (): string => {
    // Check if the provided 'lang' exists and has a value
    if (lang && lang !== '') {
      return lang; // Return the provided 'lang'
    }
    return 'en'; // Return 'en' as the default language
  };

  // Get the language to use
  const languageToUse = determineLanguage();

  return (
    <div className="relative  ">
      <Card
        shadow="none"
        // isPressable
        fullWidth
        className=" relative flex   w-full flex-col overflow-hidden  "
      >
        <Skeleton isLoaded className="rounded-lg">
          <CardBody className=" md:h-68 relative flex  w-full items-center justify-center overflow-hidden rounded-xl">
            {item?.status === 'out-of-stock' && (
              <div className="absolute left-2 top-2 z-50 flex   rounded-full ">
                <Image
                  src="/images/sold-out.png"
                  alt="sold-out"
                  width="100%"
                  className="h-20 w-20 object-contain object-center"
                  height="100%"
                />
              </div>
            )}

            <Link href={`/products/${item?.slug}`}>
              <Image
                className=" h-full   w-full  object-cover object-center  "
                src={`https://simrckw.s3.eu-north-1.amazonaws.com/${item?.images[0]}`}
                alt={item?.name[languageToUse] || 'Product image'}
                width="100%"
                height="100%"
                removeWrapper
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
                    <div className="absolute  right-1 top-1 z-50  rounded-full border-[0.5px] bg-orange-600 px-4 py-1 text-xs text-white">
                      <p className="flex items-center gap-x-1">
                        <span>
                          <MdOutlineDiscount size={20} className="" />
                        </span>
                        {calculatePercentage(item.old_price, item?.price)}% off
                      </p>
                    </div>
                  )}
                  <div className="flex items-center gap-x-2">
                    {item.old_price !== 0 ? (
                      <p className="text-sm text-slate-500 line-through">
                        <FormattedPrice amount={item?.old_price} />
                      </p>
                    ) : null}
                    <p className="font-semibold text-orange-600  ">
                      <FormattedPrice amount={item?.price} />
                    </p>
                  </div>
                </div>
                {/* </p> */}
                <Button
                  fullWidth
                  radius="lg"
                  type="button"
                  onClick={() =>
                    dispatch(setProdctCart(item)) &&
                    toast.success(t('add-to-cart'))
                  }
                  className=" flex w-full flex-col items-center justify-center bg-greyColor  "
                  aria-label="add to cart"
                >
                  <span className=" flex w-full items-center  justify-center text-center    ">
                    <span className=" w-full   text-sm font-semibold uppercase text-black">
                      {t('add-to-cart')}
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
