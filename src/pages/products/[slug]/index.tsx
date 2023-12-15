/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */

import type { ProductType } from '@/apps/interface/types';
import { Meta } from '@/component/layouts/Meta';
import Container from '@/component/modules/Container';
import ProductPage from '@/component/modules/ProductPage';
import ProductDataSwiper from '@/component/modules/ProductsDataSwiper';
import { Main } from '@/component/templates/Main';

const index = ({ product ,productsData }: { product: ProductType,productsData: ProductType }) => {
  return (

    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
        <Container>
          <ProductPage product={product} />
            <ProductDataSwiper msg="check another products" textcolor='secondary-black' product={productsData}  />
        </Container>
        </Main>
  );
};
export default index;

export async function getServerSideProps(context: {
  params: { slug: { slug: any } };
}) {
  const { slug } = context.params;
  // console.log(slug, 'productId');
  const res = await fetch(`http://localhost:8000/products/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const product = await res.json();

  // Pass data to the page via props
  const res2 = await fetch(`http://localhost:8000/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const productsData = await res2.json();

  return {
    props: {
      product: product.data.product,
      productsData: productsData.data.products,

    },
  };
}

