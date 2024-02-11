/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/apps/redux/store';
import SpinnerLoader from '@/component/modules/SpinnerLoader';
import Transition from '@/component/modules/Transition';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate loading={<SpinnerLoader />} persistor={persistor}>
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </PersistGate>
      </Provider>
    </NextUIProvider>
  );
};

export default MyApp;
