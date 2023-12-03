/* eslint-disable no-underscore-dangle */
import React from 'react';

import { getProducts } from '@/helpers';

import Container from './Container';
import ProductsData from './ProductsData';

const Products = async () => {
  const products = await getProducts();

  return (
    <div className="">
      <Container className="-mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {products?.map((item: any) => (
          <ProductsData item={item} key={item._id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
