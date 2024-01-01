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
      id="banner"
      className="relative h-screen  bg-cover bg-scroll bg-center md:bg-fixed lg:h-[750px]"
      style={{
        backgroundImage:
          "url('https://simrckw.s3.eu-north-1.amazonaws.com/images/banner/first-banner')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full w-full">
        <BannerText title={t('banner')} message={t('theword')} />
      </div>
    </div>
  );
};
export default Banner;
