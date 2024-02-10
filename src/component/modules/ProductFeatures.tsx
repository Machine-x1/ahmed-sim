/* eslint-disable tailwindcss/no-custom-classname */

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function ProductFeatures() {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div
      className="relative h-auto max-w-full  lg:h-[700px]  "
      style={{
        background: 'url(/images/small-banner.png)',
        backgroundColor: '#f5f5f5',
      }}
    >
      <main className="  relative flex h-auto flex-col  justify-center     overflow-hidden   lg:h-[700px]">
        <div className="relative z-20 flex w-1/2   items-center justify-center  overflow-hidden  ">
          <div className="container relative mx-24   flex  px-12 ">
            <div className="relative z-20 flex flex-col ">
              <h1 className=" flex flex-col   text-8xl font-extrabold  uppercase  text-secondaryBlack  ">
                {t('feature.header')}
              </h1>
              <h2 className=" flex flex-col text-4xl font-bold uppercase  text-secondaryBlack  ">
                {t('feature.let_header')}
                <span className="text-xl ">{t('feature.let_header_2')}</span>
              </h2>

              <div className="mt-8 flex   gap-4">
                <Button
                  variant="flat"
                  radius="lg"
                  size="md"
                  onClick={() => {
                    router.push('/products');
                  }}
                  className=" border-2 border-orange-500 bg-transparent text-xs uppercase  text-orange-500 hover:bg-orange-500 hover:text-white  md:text-base"
                >
                  {t('feature.body_end')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
