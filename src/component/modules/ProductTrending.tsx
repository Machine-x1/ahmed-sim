/* eslint-disable @typescript-eslint/no-shadow */
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
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Divider } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper React components
// import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { productData } from '@/apps/constants/data';
import type { Product } from '@/apps/interface/types';

import Container from './Container';
import NewProductCard from './NewProductCard';

const ProductTrending = ({
  msg,
  products,
}: {
  msg?: string;
  products?: Product;
}) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    productData.map((item: Product) => {
      return setData(item);
    });
  }, []);
  return (
    <Container className=" h-full w-full">
      <div className="h-full w-full ">
        <Container className=" flex w-full gap-2 ">
          <div className="mb-4 flex w-full items-center justify-center  ">
            <h2 className=" flex w-10/12 items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
              <Divider className=" mx-auto  w-1/3" />
              <span className="w-2/3 max-w-full">
                {msg || 'Featured Products'}
              </span>
              <Divider className=" mx-auto w-1/3  " />
            </h2>
          </div>
        </Container>
        <div className=" relative h-full w-full   ">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation
            pagination
            loop
            direction="horizontal"
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            className={' '}
          >
            {productData.map((item: any) => (
              <SwiperSlide key={item._id}>
                {/* <div className="mx-auto flex flex-row"> */}
                <NewProductCard item={item} />
                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default ProductTrending;
