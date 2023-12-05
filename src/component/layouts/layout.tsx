/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable import/no-extraneous-dependencies */

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import { NextUIProvider } from '@nextui-org/react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import store from '@/apps/redux/store';

import Footer from '../modules/Footer';
import Header from '../modules/Header';
import Transition from '../modules/Transition';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="mx-auto w-full max-w-[1920px] overflow-x-hidden">
        <Transition>
          <I18nextProvider i18n={i18n}>
            <NextUIProvider>
              {/* <Layout> */}
              <Provider store={store}>
                <Header />
                {children}
                <Footer />
              </Provider>
              {/* </Layout> */}
            </NextUIProvider>
          </I18nextProvider>
        </Transition>
      </body>
    </html>
  );
}
