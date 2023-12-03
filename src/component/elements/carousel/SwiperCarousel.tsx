// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import '@/styles/global.css';
import type { ReactElement } from 'react';
import React from 'react';
// import required modules
import { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import type { PaginationOptions, SwiperOptions } from 'swiper/types';

interface SwiperProps<T> {
  item: Array<T>;
  children: ReactElement<{ item: T; key: number }>;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
  pagination?: PaginationOptions | undefined | boolean;
  direction?: 'vertical' | 'horizontal';
  swiperSlideClass?: string;
  swiperContainerClass?: string;
  swiperProps?: SwiperOptions;
}

export default function SwiperCarousel(props: SwiperProps<{ id: number }>) {
  const {
    item,
    children,
    slidesPerView,
    spaceBetween,
    navigation,
    pagination,
    direction,
    swiperSlideClass,
    swiperContainerClass,
    swiperProps,
  } = props;

  const cloneItems = item.map((el) => {
    return (
      <SwiperSlide key={el.id} className={swiperSlideClass}>
        {React.cloneElement(children, {
          item: el,
          key: el.id,
        })}
      </SwiperSlide>
    );
  });
  return (
    <Swiper
      slidesPerView={slidesPerView || 4}
      spaceBetween={spaceBetween || 30}
      navigation={navigation || false}
      pagination={pagination || false}
      direction={direction || 'horizontal'}
      modules={[Navigation, Pagination]}
      className={swiperContainerClass}
      {...swiperProps}
    >
      {cloneItems}
    </Swiper>
  );
}
