/* eslint-disable no-underscore-dangle */
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
// import product from 'next-seo/lib/jsonld/product';
import toast from 'react-hot-toast';
import { MdDelete } from 'react-icons/md';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';

// const NewProductCard = ({ item, lang }: { item?: ProductType; lang: any }) => {
const Admincard = ({
  item,
  lang,
  setProductsData,
}: {
  item?: any;
  lang: any;
  setProductsData: any;
}) => {
  // const [isHovered, setIsHovered] = useState(false);
  // const { t } = useTranslation('common');
  // const { cart } = useSelector((state: RootState) => state.cart);
  const handleDelete = async (product: any) => {
    await internalrequestHandler('apiDeleteProduct', 'POST', {
      product,
    }).then(() => {
      toast.success('Product deleted successfully');
      setProductsData((prevProductsData: any) => {
        const updatedProductsData = prevProductsData.filter(
          (dataItem: any) => dataItem._id !== product._id
        );
        return updatedProductsData;
      });
    });
  };
  return (
    <div className="relative  ">
      <Card
        shadow="none"
        fullWidth
        className=" relative flex   w-full flex-col overflow-hidden  "
      >
        <Skeleton isLoaded className="rounded-lg">
          <CardBody className=" relative flex w-full  items-center justify-center overflow-hidden rounded-xl md:h-72">
            <Link href={`/products/${item?.slug}`}>
              <Image
                className=" max-h-60  w-full  object-cover  object-center"
                src={`https://simrckw.s3.eu-north-1.amazonaws.com/${item?.images[0]}`}
                alt={item?.name}
                width="100%"
                height="100%"
                removeWrapper
              />
            </Link>
            <h3>{item.name[lang]}</h3>
          </CardBody>

          <CardFooter className=" mb-2 flex flex-col ">
            <div className="mx-auto  flex w-full flex-col items-center justify-center gap-4">
              <div className=" flex w-full items-center   justify-between gap-4 ">
                <Button
                  radius="lg"
                  type="button"
                  onClick={() => handleDelete(item)}
                  className=" flex w-full flex-col items-center justify-center bg-greyColor  "
                  aria-label="add to cart"
                >
                  <span className=" flex w-full items-center  justify-center text-center    ">
                    <span className=" w-full  text-lg font-semibold uppercase text-black">
                      Delete
                    </span>
                    <MdDelete
                      size={20}
                      className="flex justify-end text-sm text-red-600 md:text-xl  "
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

export default Admincard;
