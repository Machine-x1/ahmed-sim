/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import useTranslation from 'next-translate/useTranslation';
import { BiCartAdd } from 'react-icons/bi';
import { MdReadMore } from 'react-icons/md';

import Container from './Container';

interface Props {
  title?: string;
  message?: string;
}

const BannerText = ({ title, message }: Props) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className="  flex h-full  w-full flex-col  items-center justify-center  py-8 md:w-1/2 md:py-4 ">
      <Container className="flex w-full flex-col   items-center justify-center gap-y-4 ">
        <div className=" bg-opacity-1 flex flex-col gap-4 rounded-lg bg-transparent p-2 backdrop-blur-sm  ">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="  max-w-xl px-4  text-3xl font-bold text-slate-300 shadow-sm md:text-4xl  "
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="  w-full max-w-xl px-4 text-5xl  font-bold text-slate-300 shadow-sm  md:text-7xl "
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
              variant="light"
              className="bg-orange-500  px-4 py-2 text-sm font-semibold uppercase text-white duration-200 hover:bg-orange-500 hover:text-white "
            >
              {t('shop-now')}
              <span>
                <BiCartAdd size={20} />
              </span>
            </Button>
            <Button
              type="button"
              onClick={() => {
                router.push('#about-us');
              }}
              radius="none"
              aria-label="read-more"
              size="md"
              variant="light"
              className="bg-orange-500  px-4 py-2 text-sm font-semibold uppercase text-white duration-200 hover:bg-orange-500 hover:text-white "
            >
              {t('read')}
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
