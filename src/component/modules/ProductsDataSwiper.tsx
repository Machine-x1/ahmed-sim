import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Divider } from '@nextui-org/react';
import type { CookieValueTypes } from 'cookies-next';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { ProductType } from '@/apps/interface/types';

import { autoplay, breakpoints } from '../elements/carousel/BreakPoints';
import Container from './Container';
import NewProductCard from './NewProductCard';

const MemoizedProductCard = React.memo(NewProductCard);

const DefaultMsg = 'Introducing Our Latest Products';
const ProductDataSwiper = ({
  msg = DefaultMsg,
  textcolor,
  product,
  lang,
}: {
  msg?: string;
  textcolor?: string;
  product?: ProductType;
  lang: CookieValueTypes;
}) => {
  return (
    <section className="  w-full bg-secondaryBlack ">
      <Container className=" h-full   w-full ">
        <Container className=" flex w-full gap-2 ">
          <div className="mb-4 flex w-full ">
            <div className="flex w-full flex-col justify-start gap-4">
              <h2
                className={`  text-4xl font-semibold capitalize  ${textcolor}`}
              >
                {msg}
              </h2>
              <Divider className="  w-1/2 bg-hoverTextColor " />
            </div>
          </div>
        </Container>
        <div className=" relative mx-auto h-full w-full">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            navigation
            loop
            direction="horizontal"
            modules={[Navigation, Autoplay]}
            autoplay={autoplay}
            breakpoints={breakpoints}
          >
            {product?.map((item: any) => (
              <SwiperSlide key={item.id}>
                <MemoizedProductCard lang={lang} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
    </section>
  );
};

export default ProductDataSwiper;
