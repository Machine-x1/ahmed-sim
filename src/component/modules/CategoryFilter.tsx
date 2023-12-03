/* eslint-disable new-cap */
/* eslint-disable no-return-assign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable array-callback-return */

'use client';

import { Checkbox } from '@nextui-org/react';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$15',
    color: 'Black',
    range: '10000 to 500000',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    range: '500 to 1000',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$45',
    color: 'Black',
    range: '300 to 500',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
    range: '100 to 300',
  },
  // More products...
];

const CategoryFilter = () => {
  // const getUniqueCat = (data: ProductType[], field: string) => {
  //   let newElement = data.map((curlElement) => {
  //     return curlElement[field];
  //   });
  //   return (newElement = [...new Set(newElement)]);
  // };
  // const priceRange = getUniqueCat(products, 'range');

  return (
    <div className="w-full">
      <div className="mx-auto mt-10 flex flex-col items-start justify-center md:w-11/12">
        <div className="md-3/12 mx-auto mt-10 flex w-full flex-col items-start justify-center px-4   ">
          {/* category 1  */}
          <div className="  flex w-full flex-col">
            {/* <div className=" w-auto  bg-purple-200  text-center text-2xl text-purple-800 ">
              Available products
            </div> */}
            <div className="flex">
              <div className="flex items-center text-center   font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
                Available Products
              </div>
            </div>
            <ul className="space-y-3 py-10 text-left ">
              {products.map((item: any, idx: any) => {
                return (
                  <li
                    key={idx}
                    className="flex items-center justify-start space-x-4 text-left text-xl font-medium"
                  >
                    <div>
                      {/* <Input
                        className=" mt-2 cursor-pointer"
                        type="checkbox"
                        value={item}
                        // checked
                        // onChange={() => {}}
                      /> */}
                      <Checkbox
                        defaultSelected
                        value={item}
                        size="lg"
                        name={item}
                        color="primary"
                      />
                    </div>
                    <div className="capitalize">{item}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* category two */}

          <div className="  flex w-full flex-col">
            {/* <div className=" w-auto  bg-purple-200  text-center text-2xl text-purple-800 ">
              Available products
            </div> */}
            <div className="flex">
              <div className="flex items-center text-center   font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
                Available Products
              </div>
            </div>
            <ul className="space-y-3 py-10 text-left ">
              {products.map((item: any, idx: any) => {
                return (
                  <li
                    key={idx}
                    className="flex items-center justify-start space-x-4 text-left text-xl font-medium"
                  >
                    <div>
                      {/* <Input
                        className=" mt-2 cursor-pointer"
                        type="checkbox"
                        value={item}
                        // checked
                        // onChange={() => {}}
                      /> */}
                      <Checkbox
                        defaultSelected
                        value={item}
                        size="lg"
                        name={item}
                        color="primary"
                      />
                    </div>
                    <div className="capitalize">{item}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
