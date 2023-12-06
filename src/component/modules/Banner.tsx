/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerText from './BannerText';

const Banner = () => {
  return (
    <div className=" relative max-h-[700px] max-w-full  md:block md:w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop
        spaceBetween={0}
        direction="horizontal"
        pagination
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className=" relative h-full w-full   ">
            <Image
              src="/images/3.jpg"
              width={1920}
              height={720}
              alt="bannerone"
              // radius="none"
              className="relative   max-h-[700px]  w-full   object-cover object-center "
              priority
            />

            <BannerText title="MOZA Racing ES" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative h-full w-full">
            <Image
              // radius="none"
              src="/images/3.jpg"
              width={1920}
              height={720}
              alt="bannertwo"
              className=" relative    max-h-[700px]   w-full object-cover object-center"
            />
            <BannerText title="Simulators fx pro" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-0 left-0 z-10 h-44 w-full bg-gradient-to-t from-gray-800 to-transparent" />
    </div>
  );
};

export default Banner;
