/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

import Image from 'next/image';

import BannerText from './BannerText';

const Banner = () => {
  // const NextArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className=" absolute left-2 top-1/2 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500"
  //       onClick={onClick}
  //     >
  //       <PiCaretLeftLight />
  //       {/* <IoIosArrowForward /> */}
  //     </div>
  //   );
  // };
  // const PrevArrow = (props: any) => {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className=" absolute right-2  top-1/2 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500"
  //       onClick={onClick}
  //     >
  //       <PiCaretRightLight />
  //     </div>
  //   );
  // };
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   autoplay: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  // };
  return (
    <div className=" relative max-h-[700px] max-w-full  md:block md:w-full">
      {/* <SwiperCarousel
        spaceBetween={0}
        slidesPerView={1}
        direction="horizontal"
        pagination
      > */}
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
      {/* <div className=" relative h-full w-full">
          <Image
            // radius="none"
            src="/images/3.jpg"
            width={1920}
            height={720}
            alt="bannertwo"
            className=" relative    max-h-[700px]   w-full object-cover object-center"
          />
          <BannerText title="Simulators fx pro" />
        </div> */}
      {/* </SwiperCarousel> */}
      <div className="absolute bottom-0 left-0 z-10 h-44 w-full bg-gradient-to-t from-gray-800 to-transparent" />
    </div>
  );
};

export default Banner;
