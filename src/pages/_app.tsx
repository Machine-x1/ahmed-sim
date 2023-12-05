/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable import/no-extraneous-dependencies */

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './css/transition.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '../styles/global.css';

import type { AppProps } from 'next/app';

import Layout from '@/component/layouts/layout';

// eslint-disable-next-line import/no-extraneous-dependencies

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};
export default MyApp;
