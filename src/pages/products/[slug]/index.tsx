/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */

import type { GetServerSidePropsContext } from 'next';
import useTranslation from 'next-translate/useTranslation';

import type { ProductType } from '@/apps/interface/types';
import { Meta } from '@/component/layouts/Meta';
import Container from '@/component/modules/Container';
import ProductPage from '@/component/modules/ProductPage';
import ProductDataSwiper from '@/component/modules/ProductsDataSwiper';
import { Main } from '@/component/templates/Main';

const Index = ({
  product,
  productsData,
  lang,
}: {
  product: ProductType;
  productsData: ProductType;
  lang: any;
}) => {
  const { t } = useTranslation('common');
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <Container>
        <ProductPage lang={lang} product={product} />
        <ProductDataSwiper
          lang={lang}
          msg={t('other-products')}
          textcolor="text-secondary-black"
          product={productsData}
        />
      </Container>
    </Main>
  );
};
export default Index;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query;
  const res = await fetch(`${process.env.API_EXTRANL}/products/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const product = await res.json();

  // Pass data to the page via props
  const res2 = await fetch(`${process.env.API_EXTRANL}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const productsData = await res2.json();
  const getLang = context.locale;

  return {
    props: {
      product: product.data.product,
      productsData: productsData.data.products,
      lang: getLang,
    },
  };
}
