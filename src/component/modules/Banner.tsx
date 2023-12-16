/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

// eslint-disable-next-line import/no-extraneous-dependencies
import useTranslation from 'next-translate/useTranslation';

import BannerText from './BannerText';

const Banner = () => {
  const { t } = useTranslation('common');
  return (
    <div
      // edit that image style plz @ahmed
      // i have remoed swiper bcz it was useless
      className="h-screen max-h-[1080px] max-w-full bg-red-500 md:block md:w-full lg:h-[750px]"
      style={{
        objectFit: 'cover',
        objectPosition: 'center center',
        backgroundImage: "url('/images/car-racing-video-game-arcade.jpg')",
      }}
    >
      <div className="h-full w-full">
        {/* <Image
      src="/images/car-racing-video-game-arcade.jpg"
      width={1920}
      height={1080}
      alt="bannerone"
      className="h-screen w-full object-cover object-center lg:h-[750px]"
      priority
    /> */}

        <BannerText title={t('banner')} />
      </div>
    </div>
  );
};
export default Banner;
