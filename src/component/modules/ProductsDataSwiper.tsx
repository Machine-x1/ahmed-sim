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
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from './Container';
import NewProductCard from './NewProductCard';
import { productData } from '@/apps/constants/data';
;

const ProductDataSwiper = ({ msg , textcolor }: { msg?: string,textcolor?:string }) => {


  return (
    <div className="w-full ">
      <Container className=" h-full w-full">
        <div className="h-full w-full ">
          <Container className=" flex w-full gap-2 ">
            <div className="mb-4 flex w-full ">
              <div className="flex w-full flex-col justify-start gap-4">
                <h2 className={`text-4xl  font-semibold capitalize text-${textcolor}`}>
                  {msg || 'Introducing Our Latest Products'}
                </h2>
                <Divider className="  w-1/2 bg-hoverTextColor " />
              </div>
            </div>
          </Container>
          <div className=" relative h-full w-full   ">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation
              loop
              direction="horizontal"
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
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
            >
              {productData.map((item:any) => (
                <SwiperSlide key={item._id} >
                  <NewProductCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDataSwiper;
