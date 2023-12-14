/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import BannerText from './BannerText';

const Banner = () => {
  return (
    <div className=" relative h-screen max-h-[1080px] max-w-full md:block  md:w-full lg:h-[750px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        loop
        spaceBetween={0}
        direction="horizontal"
        // pagination
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className=" relative h-full w-full   ">
            <Image
              src="/images/car-racing-video-game-arcade.jpg"
              width={4000}
              height={2666}
              alt="bannerone"
              // radius="none"
              className="relative  h-screen   w-full object-cover   object-center lg:h-[750px] "
              priority
            />

            <BannerText title="Welcome to Sim Racing Corner"  />
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className=" relative h-full w-full">
            <Image
              // radius="none"
              src="/images/3.jpg"
              width={2000}
              height={2000}
              alt="bannertwo"
              className=" relative    h-screen   w-full object-cover object-center lg:h-[750px]"
            />
            <BannerText title="Explore the Thrill of Sim Racing" />
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="absolute bottom-0  left-0 z-20 h-32 w-full bg-gradient-to-t from-gray-800 to-transparent" />
    </div>
  );
};
export default Banner;