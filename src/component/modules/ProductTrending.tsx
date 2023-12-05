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
import '@ahmed-osama-salem/swiper-react-component/dist/style.css'; // HEREimport '@ahmed-osama-salem/swiper-react-component/dist/style.css'; // HERE

import { SwiperCarousel } from '@ahmed-osama-salem/swiper-react-component';
import { Divider } from '@nextui-org/react';
import React from 'react';
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';

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
  const NextArrow = (prop: any) => {
    const { onClick } = prop;
    return (
      <div
        className=" absolute left-2  top-1/2 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500
        "
        onClick={onClick}
      >
        <PiCaretLeftLight />
        {/* <IoIosArrowForward /> */}
      </div>
    );
  };
  const PrevArrow = (prop: any) => {
    const { onClick } = prop;
    return (
      <div
        className=" absolute right-2   top-1/2 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    className: 'center',
    slidesToShow: 1,
    easing: 'linear',
    slidesToScroll: 4,
    initialSlide: 0,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: '0px',
    swipeToSlide: true,
  };
  const features = [
    {
      _id: 1,
      title: 'Long sleeve Jacket',
      isNew: true,
      oldPrice: '200',
      price: 150,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?size=626&ext=jpg&ga=GA1.1.453157835.1694346094&semt=sph',
      rating: 4,
      quantity: 1,
    },
    {
      _id: 2,
      title: 'Jacket with wollen hat',
      isNew: true,
      oldPrice: '70',
      price: 65,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',
      category: 'women',
      image:
        'https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.2.453157835.1694346094&semt=sph',
      rating: 3,
      quantity: 1,
    },
  ];

  return (
    <Container className=" h-full w-full">
      <div className="h-full w-full ">
        <Container className=" flex w-full gap-2 ">
          {/* <div className="flex gap-4 ">
            <div className="flex items-center text-center  font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
              {msg || 'Featured Products'}
            </div>
          </div> */}
          <div className="mb-4 flex w-full items-center justify-center  ">
            <h2 className=" flex w-1/2  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
              <Divider className=" mx-auto  w-1/3" />
              {msg || 'Featured Products'}
              <Divider className=" mx-auto w-1/3  " />
            </h2>
          </div>
        </Container>
        <div className=" flex w-full">
          <div className="  relative   h-full w-full   ">
            {features.map((item: any) => (
              <SwiperCarousel key={item._id} item={item}>
                <div className="relative" key={item._id}>
                  <NewProductCard item={item} />
                </div>
              </SwiperCarousel>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductTrending;
