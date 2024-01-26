/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import useTranslation from 'next-translate/useTranslation';
import toast from 'react-hot-toast'; // Add this line
import { BiSolidCartAdd } from 'react-icons/bi';
import { MdReadMore } from 'react-icons/md';

import Container from './Container';

interface Props {
  title?: string;
  message?: string;
  // lang?: string;
  // product?: any;
}

const BannerText = ({ title, message }: Props) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  // const [preOrderStatus, setPreOrderStatus] = useState('Pre-Order'); // Initial button text

  // const handlePreOrder = async (preOrderProduct: any) => {
  //   const totalPrice = preOrderProduct?.price;

  //   setPreOrderStatus('Processing...');

  //   try {
  //     // await new Promise((resolve) => setTimeout(resolve, 1000));

  //     // make a whatsapp message with the products and total price
  //     // const totalPrice = total.toFixed(2);
  //     const purchasedProducts = preOrderProduct?.name.en;

  //     const message = `pre-order Summary \n Total Price: $${totalPrice} \nProducts: ${purchasedProducts}`;
  //     const phoneNumber = '+96569399851';
  //     const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
  //       message
  //     )}`;

  //     router.push(whatsappLink);
  //     setPreOrderStatus('Pre-Ordered');
  //     toast.success(t(`toast-pre-order`));
  //   } catch (error) {
  //     // setPreOrderStatus('Failed');
  //     toast.error(t(`toast-pre-order-error`));
  //   }
  // };
  const handlePreOrder = () => {
    toast.success('available soon stay tuned');
  };

  return (
    <div className="   flex h-full  w-full flex-col  items-center justify-center  py-8 md:w-1/2 md:py-4 ">
      <Container className="flex w-full flex-col   items-center justify-center gap-y-4 ">
        <div className=" z-20 flex flex-col gap-4  shadow-sm  blur-none ">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="  max-w-xl px-4  text-9xl font-extrabold text-white shadow-sm  "
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="  w-full max-w-xl px-4 text-6xl font-extrabold text-white shadow-sm   "
          >
            {message || ' '}
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="mt-2 flex  items-center justify-center gap-x-4"
          >
            <Button
              onClick={() => {
                router.push('/products');
              }}
              radius="none"
              aria-label="shop-now"
              size="md"
              type="button"
              variant="solid"
              className="bg-secondaryBlack px-4 py-2 text-sm font-semibold uppercase text-white  "
            >
              {t('shop-now')}
              <span>
                <BiSolidCartAdd size={20} />
              </span>
            </Button>
            <Button
              type="button"
              // disabled
              onClick={() => handlePreOrder()}
              radius="none"
              aria-label="read-more"
              size="md"
              variant="solid"
              className="bg-secondaryBlack  px-4 py-2 text-sm font-semibold uppercase text-white  "
            >
              {t('Pre-Order')}
              <span>
                <MdReadMore size={20} />
              </span>
            </Button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default BannerText;
