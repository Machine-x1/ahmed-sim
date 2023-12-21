/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import type { CookieValueTypes } from 'cookies-next';
import { getCookie, setCookie } from 'cookies-next';
import type { GetServerSidePropsContext } from 'next';
import useTranslation from 'next-translate/useTranslation';

import type { ProductType } from '@/apps/interface/types';
import createTokenAndUser from '@/apps/server/CreateToken';
import { Meta } from '@/component/layouts/Meta';
import AboutUs from '@/component/modules/AboutUs';
import Banner from '@/component/modules/Banner';
import ContactForm from '@/component/modules/ContactForm';
import ProductFeatures from '@/component/modules/ProductFeatures';
import ProductDataSwiper from '@/component/modules/ProductsDataSwiper';
import Sponsors from '@/component/modules/Sponsors';
import { Main } from '@/component/templates/Main';

// import { useTranslation } from 'react-i18next';

const Index = ({
  productsData,
  lang,
}: {
  productsData: ProductType;
  lang: CookieValueTypes;
}) => {
  const { t } = useTranslation('common');

  return (
    <Main meta={<Meta />}>
      <div
        id="home"
        className="mx-auto w-full max-w-[1920px] scroll-smooth bg-secondaryBlack "
      >
        <Banner />
        <ProductFeatures />
        <ProductDataSwiper
          msg={t('featured-products')}
          textcolor="text-slate-100"
          product={productsData}
          lang={lang}
        />
        <AboutUs />
        <ContactForm />
        <Sponsors />
      </div>
    </Main>
  );
};

export default Index;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { req, res } = context;
    const getToken = getCookie('token', { req, res });
    const getLang = context.locale || 'en'; // Set 'en' as default language

    setCookie('lang', getLang, { req, res });

    if (!getToken) {
      await createTokenAndUser({ req, res });
    }

    const res2 = await fetch(`${process.env.API_EXTRANL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!res2.ok) {
      throw new Error(`Failed to fetch products. Status: ${res2.status}`);
    }
    const productsData = await res2.json();
    if (!productsData?.data?.products) {
      throw new Error('Products data not available or in unexpected format');
    }
    return {
      props: {
        productsData: productsData.data.products,
        lang: getLang,
      },
    };
  } catch (error) {
    // console.error('Error in getServerSideProps:', error.message);
    return {
      redirect: {
        destination: '/500', // Redirect to a custom 500 error page
        permanent: false,
      },
    };
  }
};
