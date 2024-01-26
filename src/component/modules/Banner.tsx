/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

// eslint-disable-next-line import/no-extraneous-dependencies
// import Image from 'next/image';
import { Image } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';

import BannerText from './BannerText';

const Banner = () => {
  const { t } = useTranslation('common');
  return (
    <div
      id="banner"
      className="relative h-screen     md:bg-fixed lg:h-[750px] "
    >
      {/* <div
        className=" h-screen w-full  bg-cover bg-center md:bg-fixed lg:h-[750px]"
        // style={{
        //   backgroundAttachment: 'fixed',
        //   backgroundPosition: 'center',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        // }}
      > */}
      <Image
        radius="none"
        className=" absolute  h-screen w-full rounded-none   bg-center object-cover object-center  lg:h-[750px]  "
        // priority
        placeholder="blur"
        width="100%"
        height="100%"
        // layout="fill"
        removeWrapper
        src="/images/banner11.jpg"
        alt="Banner Image"
      />
      <BannerText title={t('banner')} message={t('theword')} />
      {/* </div> */}
    </div>
  );
};
export default Banner;
