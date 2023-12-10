/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-redundant-roles */

import { Divider, Image } from '@nextui-org/react';

/* eslint-disable tailwindcss/no-custom-classname */
const Sponsors = () => (
  <div className="h-full w-full bg-bodyColor ">
    <div className="mx-4 rounded-xl  pt-8 sm:mx-8 sm:max-w-5xl md:mx-auto">
      <div className="mx-auto mb-10 w-11/12 sm:w-2/3">
        <h1 className="pt-4 text-center text-3xl font-extrabold text-gray-800 focus:outline-none xl:text-4xl">
          OUR PREMIUM PARTNERS
        </h1>
        <Divider className="mx-auto mt-3 " />
      </div>
      <div className="sm:24 flex flex-wrap items-center justify-center px-8 sm:py-6">
        <div className="inset-0 flex w-full items-center justify-center pb-16 contrast-75 drop-shadow-xl duration-300  transition hover:scale-75 hover:contrast-100 sm:w-1/6 xl:pb-10">
          <Image
            className="w-12 focus:outline-none sm:w-16 "
            src="/images/simagiclogo.webp"
            alt="Adidas"
            role="img"
          />
        </div>
        <div className="inset-0 flex w-1/3 items-center justify-center pb-16 contrast-75 drop-shadow-xl duration-300  transition hover:scale-75 hover:contrast-100 sm:w-1/6 xl:pb-10">
          <Image
            className="w-12 focus:outline-none sm:w-16"
            width={200}
            height={200}
            src="/images/方形logo黑.webp"
            alt="Chanel"
            role="img"
          />
        </div>
      </div>
    </div>
  </div>
);
export default Sponsors;
