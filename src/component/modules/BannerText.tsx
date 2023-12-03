import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';

import Container from './Container';

interface Props {
  title?: string;
  message?: string;
  shopbtn?: boolean;
}

const BannerText = ({ title, message, shopbtn }: Props) => {
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col flex-wrap items-center justify-center py-8 md:w-1/2 md:py-4 ">
      <Container className="flex w-full flex-col items-center justify-center gap-y-4">
        {/* <div className=" flex flex-col  "> */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-xl font-bold text-hoverTextColor   md:text-5xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden text-lg text-slate-100 md:block "
        >
          {message ||
            ' MOZA Racing is determined to create innovative and professional'}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-2 flex  items-center justify-center gap-x-4"
        >
          {!shopbtn && (
            <Button
              radius="none"
              size="sm"
              className="bg-hoverTextColor text-sm font-semibold uppercase text-white duration-200  md:px-6 md:py-3 "
            >
              Shop Now
            </Button>
          )}
          <Button
            radius="none"
            size="sm"
            className="bg-hoverTextColor  text-sm font-semibold  uppercase text-white duration-200  md:px-6 md:py-3"
          >
            Learn more
          </Button>
        </motion.div>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default BannerText;
