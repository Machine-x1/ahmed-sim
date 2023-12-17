/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import { NextUIProvider } from '@nextui-org/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';

import  { persistor, store } from '@/apps/redux/store';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Transition from '@/component/modules/Transition';
import { PersistGate } from 'redux-persist/integration/react';
import SpinnerLoader from '@/component/modules/SpinnerLoader';
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
      <PersistGate loading={<SpinnerLoader />} persistor={persistor}>
    
      {/* <I18nextProvider i18n={i18n}> */}
      <Transition>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
        </Transition>
      {/* </I18nextProvider> */}
      </PersistGate>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
