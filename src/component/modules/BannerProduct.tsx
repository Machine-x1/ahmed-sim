'use client';

import Image from 'next/image';

import BannerText from './BannerText';

const BannerProduct = () => {
  return (
    <div className="relative max-h-[500px]  w-full  text-white">
      {/* <div className=" flex w-full flex-col  "> */}
      <div className="grid h-full  w-full grid-cols-1  md:grid-cols-1">
        <Image
          src="/images/3.jpg"
          width={1920}
          height={720}
          layout="responsive"
          alt="bannerone"
          className="relative h-full max-h-[500px]   w-full object-cover object-center"
          priority
        />

        <BannerText shopbtn title="MOZA Racing ES" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default BannerProduct;
