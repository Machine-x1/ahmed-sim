// eslint-disable-next-line import/no-extraneous-dependencies
import { getCookie } from 'cookies-next';

import createTokenAndUser from '@/apps/server/CreateToken';
import { Meta } from '@/component/layouts/Meta';
import AboutUs from '@/component/modules/AboutUs';
import Banner from '@/component/modules/Banner';
import ContactForm from '@/component/modules/ContactForm';
import ProductFeatures from '@/component/modules/ProductFeatures';
import ProductDataSwiper from '@/component/modules/ProductsDataSwiper';
import Sponsors from '@/component/modules/Sponsors';
import { Main } from '@/component/templates/Main';
import { ProductType } from '@/apps/interface/types';

// import { useTranslation } from 'react-i18next';

const Index = ( { productsData}: { productsData: ProductType } ) => {
// const { t } = useTranslation();

  return (

    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <div
        id="home" className="mx-auto w-full max-w-[1920px] bg-secondaryBlack ">
        <Banner />
        <ProductFeatures />
        <ProductDataSwiper msg="Featured Products" textcolor='slate-100'  product={productsData} />
        <AboutUs />
        <ContactForm />
        <Sponsors />
      </div>
    </Main>
  );
};

export default Index;
export const getServerSideProps = async (context: any) => {
  const { req, res } = context;
  const getToken = getCookie('token', { req, res });
  if (!getToken) {
    await createTokenAndUser({ req, res });
  }
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
      productsData: productsData.data.products,
    },
  };
};

