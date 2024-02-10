import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import BannerText from './BannerText';

const Banner = () => {
  const { t } = useTranslation('common');
  return (
    <div className="relative h-screen md:bg-fixed lg:h-[750px] ">
      <Image
        className=" absolute   h-screen w-full rounded-none    object-cover object-center  lg:h-[750px]  "
        priority
        quality={100}
        fill
        src="/images/banner.jpg"
        alt="Banner-Image"
      />
      <BannerText title={t('banner')} message={t('theword')} />
    </div>
  );
};
export default Banner;
