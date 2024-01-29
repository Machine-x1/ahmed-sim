/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { Button } from '@nextui-org/react';
// import Image from 'next/image';
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
        {/* <header className="flex w-full items-center   ">
          <h1 className=" flex w-1/3 flex-col  items-center text-6xl font-bold  uppercase  text-white  ">
            {t('feature.header')}
          </h1>
        </header> */}
        <div className="relative z-20 flex w-1/2   items-center justify-center  overflow-hidden  ">
          <div className="container relative mx-24   flex  px-12 ">
            <div className="relative z-20 flex flex-col ">
              {router.locale === 'ar' ? (
                <div>
                  <h1 className=" flex flex-col   text-8xl font-extrabold  uppercase  text-white  ">
                    {t('feature.header')}
                  </h1>
                  <h2 className=" flex flex-col text-4xl font-bold uppercase  text-white  ">
                    {t('feature.let_header')}
                    <span className="text-xl ">
                      {t('feature.let_header_2')}
                    </span>
                  </h2>
                </div>
              ) : (
                <div>
                  <h1 className=" flex flex-col   text-8xl font-extrabold  uppercase  text-secondaryBlack  ">
                    {t('feature.header')}
                  </h1>
                  <h2 className=" flex flex-col text-4xl font-bold uppercase  text-secondaryBlack  ">
                    {t('feature.let_header')}
                    <span className="text-xl ">
                      {t('feature.let_header_2')}
                    </span>
                  </h2>
                </div>
              )}
              {/* <p className="text-sm text-white  sm:text-base">
                {t('feature.body')}
              </p> */}
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
            {/* <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <Image
                alt="Product image"
                width={4000}
                height={2666}
                src="/images/0-88041800-1663588519-800x800.jpg"
                className="m-auto max-w-xs md:max-w-sm"
              />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
