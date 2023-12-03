/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import i18n from 'i18next';
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import store from '@/apps/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </I18nextProvider>
    </Provider>
  );
};

export default MyApp;
