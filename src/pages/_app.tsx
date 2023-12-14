/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';

import store from '@/apps/redux/store';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// eslint-disable-next-line import/no-extraneous-dependencies

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  console.log(locale)
  const dir = locale === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);


  return (
    <Provider store={store}>
      {/* <I18nextProvider i18n={i18n}> */}
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      {/* </I18nextProvider> */}
    </Provider>
  );
};

export default appWithTranslation(MyApp);
