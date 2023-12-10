/* eslint-disable no-underscore-dangle */
import React from 'react';

import { getTrendingProducts } from '@/apps/helpers';

import ProductsData from './ProductsDataSwiper';

const FeaturedProducts = async () => {
  const data = await getTrendingProducts();
  return (
    <div className="h-full w-full py-12 ">
      <div className="flex flex-col items-center justify-center text-xl font-semibold ">
        FEATURED COLLECTION
        <hr className="my-6 flex h-0.5 w-1/2  items-center justify-center border-t-0 bg-neutral-900  opacity-100 dark:opacity-50" />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 ">
        {data?.map((item: any) => (
          <ProductsData key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
