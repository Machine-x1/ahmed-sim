/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

// eslint-disable-next-line import/no-extraneous-dependencies
// import Image from 'next/image';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import BannerText from './BannerText';

const Banner = () => {
  const { t } = useTranslation('common');
  return (
    <div id="banner" className="relative h-screen md:bg-fixed lg:h-[750px] ">
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
        className=" absolute   h-screen w-full rounded-none   bg-center object-cover object-center  lg:h-[750px]  "
        priority
        quality={100}
        fill
        src="/images/banner.jpg"
        alt="Banner-Image"
      />
      <BannerText title={t('banner')} message={t('theword')} />
      {/* </div> */}
    </div>
  );
};
export default Banner;
