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
import { useDispatch } from 'react-redux';

import { setProdctCart } from '@/apps/redux/slice/cartSlice';

import FormattedPrice from './FormattedPrice';

// const NewProductCard = ({ item, lang }: { item?: ProductType; lang: any }) => {
const NewProductCard = ({ item, lang }: { item?: any; lang: any }) => {
  const dispatch = useDispatch();
  // const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation('common');
  // const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <div className="relative  ">
      <Card
        shadow="none"
        // isPressable
        fullWidth
        className=" relative flex   w-full flex-col overflow-hidden  "
      >
        <Skeleton isLoaded className="rounded-lg">
          <CardBody className=" relative flex w-full  items-center justify-center overflow-hidden rounded-xl md:h-72">
            <Link href={`/products/${item?.slug}`}>
              <Image
                className=" max-h-60  w-full  object-cover  object-center"
                src={item?.images[0]}
                alt={item?.name[lang]}
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
                  {item?.name[lang] || item?.name.en}
                </h5>
                <p className="  flex items-center justify-end">
                  <span className="text-lg font-bold text-orange-500">
                    <FormattedPrice amount={item?.price} />
                  </span>
                </p>
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
