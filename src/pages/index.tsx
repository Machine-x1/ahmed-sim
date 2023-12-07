// eslint-disable-next-line import/no-extraneous-dependencies
import { getCookie } from 'cookies-next';

import createTokenAndUser from '@/apps/server/CreateToken';
import { Meta } from '@/component/layouts/Meta';
import AboutUs from '@/component/modules/AboutUs';
import Banner from '@/component/modules/Banner';
import ContactForm from '@/component/modules/ContactForm';
import ProductFeatures from '@/component/modules/ProductFeatures';
import ProductDataSwiper from '@/component/modules/ProductsData';
import Sponsors from '@/component/modules/Sponsors';
import { Main } from '@/component/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <div
        id="home"
        className="mx-auto w-full   max-w-[1920px] bg-mainOrange  "
      >
        <Banner />
        {/* <Categories /> */}
        <ProductFeatures />
        {/* <Vidiooo /> */}

        {/* <ProductTrending msg="Featured Products" /> */}
        <ProductDataSwiper msg="Featured Products" />
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
  return {
    props: {},
  };
};
