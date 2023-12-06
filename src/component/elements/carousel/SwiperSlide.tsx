import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import BannerText from '@/component/modules/BannerText';

export const Slide = ({
  imagePath,
  altText,
  bannerTitle,
}: {
  imagePath: string;
  altText: string;
  bannerTitle: string;
}) => {
  return (
    <SwiperSlide>
      <div className="relative h-full w-full">
        <Image
          src={imagePath}
          width={1920}
          height={720}
          alt={altText}
          className="relative max-h-[700px] w-full object-cover object-center"
        />
        <BannerText title={bannerTitle} />
      </div>
    </SwiperSlide>
  );
};
