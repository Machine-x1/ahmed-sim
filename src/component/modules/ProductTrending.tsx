/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */

'use client';

import { Spinner } from '@nextui-org/react';
import React, { Suspense } from 'react';
import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import Slider from 'react-slick';

import Container from './Container';
import NewProductCard from './NewProductCard';

const productsfield = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    imageSrc: '/images/3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    title: 'Basic Tee',
    href: '#',
    imageSrc: '/images/3.jpg',

    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    title: 'Basic Tee',
    href: '#',
    imageSrc: '/images/3.jpg',

    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 38,
    title: 'Basic Tee',
    href: '#',
    imageSrc: '/images/3.jpg',

    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 38,
    title: 'Basic Tee',
    href: '#',
    imageSrc: '/images/3.jpg',

    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

const ProductTrending = (props: any) => {
  const NextArrow = (prop: any) => {
    const { onClick } = prop;
    return (
      <div
        className=" absolute left-2  top-1/3 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500
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
        className=" absolute right-2   top-1/3 z-20  flex cursor-pointer items-center justify-center text-6xl text-hoverTextColor duration-200 hover:text-orange-500"
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
    slidesToShow: 4,
    easing: 'linear',
    slidesToScroll: 2,
    initialSlide: 0,
    speed: 500,
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
  const { msg } = props;
  return (
    <Container className="h-full w-full">
      <div className="h-full w-full ">
        <Container className=" flex w-full gap-2 ">
          <div className="flex gap-4 ">
            <div className="flex items-center text-center  font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
              {props.msg ? msg : 'Featured Products'}
            </div>
          </div>
        </Container>
        <Suspense
          fallback={
            <div className="h-full w-full items-center justify-center">
              <Spinner />
            </div>
          }
        >
          <div className="  relative h-full w-full   ">
            <Slider lazyLoad="ondemand" draggable {...settings}>
              {productsfield.map((product) => (
                <div className="relative" key={product.id}>
                  <NewProductCard item={product} />
                </div>
              ))}
            </Slider>
          </div>
        </Suspense>
      </div>
    </Container>
  );
};

export default ProductTrending;
