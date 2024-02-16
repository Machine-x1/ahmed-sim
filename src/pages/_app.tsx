/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/apps/redux/store';

const SpinnerLoader = lazy(() => import('@/component/modules/SpinnerLoader'));
const Transition = lazy(() => import('@/component/modules/Transition'));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  const [componentLoaded, setComponentLoaded] = useState(false);

  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  if (!componentLoaded) {
    return <SpinnerLoader />;
  }

  return (
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate loading={<SpinnerLoader />} persistor={persistor}>
          <Suspense fallback={<SpinnerLoader />}>
            <Transition>
              <Component {...pageProps} />
            </Transition>
          </Suspense>
        </PersistGate>
      </Provider>
    </NextUIProvider>
  );
};

export default MyApp;
