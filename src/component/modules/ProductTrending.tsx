/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';

import type { Product } from '@/apps/interface/types';

import SwiperCarousel from '../elements/carousel/SwiperCarousel';
import Container from './Container';
import NewProductCard from './NewProductCard';

const ProductTrending = ({
  msg,
  products,
}: {
  msg?: string;
  products?: Product;
}) => {
  // const NextArrow = (prop: any) => {
  //   const { onClick } = prop;
  //   return (
  //     <div
  //       className=" absolute left-2  top-1/2 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500
  //       "
  //       onClick={onClick}
  //     >
  //       <PiCaretLeftLight />
  //       {/* <IoIosArrowForward /> */}
  //     </div>
  //   );
  // };
  // const PrevArrow = (prop: any) => {
  //   const { onClick } = prop;
  //   return (
  //     <div
  //       className=" absolute right-2   top-1/2 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500"
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
  //   autoplaySpeed: 1500,
  //   className: 'center',
  //   slidesToShow: 4,
  //   easing: 'linear',
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   speed: 300,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  //   arrows: true,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   centerMode: true,
  //   centerPadding: '0px',
  //   swipeToSlide: true,
  // };
  return (
    <Container className="h-full w-full">
      <div className="h-full w-full ">
        <Container className=" flex w-full gap-2 ">
          <div className="flex gap-4 ">
            <div className="flex items-center text-center  font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
              {msg || 'Featured Products'}
            </div>
          </div>
        </Container>

        <div className="  relative h-full w-full   ">
          {/* {productsData.map((item: any) => ( */}
          <div className="relative">
            <SwiperCarousel
              item={[]}
              slidesPerView={4}
              direction="horizontal"
              pagination
            >
              {/* <div className="relative" key={item._id}> */}
              <NewProductCard />
              {/* </div> */}
            </SwiperCarousel>
          </div>
          {/* ))} */}
        </div>
      </div>
    </Container>
  );
};

export default ProductTrending;
