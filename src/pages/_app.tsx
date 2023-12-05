/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable import/no-extraneous-dependencies */

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './css/transition.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import '../styles/global.css';

import type { AppProps } from 'next/app';

// eslint-disable-next-line import/no-extraneous-dependencies
import Layout from '@/component/layouts/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main id="" className="mx-auto w-full max-w-[1920px]">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};
export default MyApp;
