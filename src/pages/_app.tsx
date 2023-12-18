/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/apps/redux/store';
import SpinnerLoader from '@/component/modules/SpinnerLoader';

// eslint-disable-next-line import/no-extraneous-dependencies

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <Provider store={store}>
      {/* <I18nextProvider i18n={i18n}> */}
      <PersistGate loading={<SpinnerLoader />} persistor={persistor}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
        {/* </I18nextProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
