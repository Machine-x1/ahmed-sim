/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function ProductFeatures() {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className="h-auto max-w-full bg-bodyColor  lg:h-[700px]  ">
      <main className=" relative flex h-auto flex-col items-center  overflow-hidden bg-white dark:bg-gray-800 lg:h-[700px]">
        <header className="mt-12 ">
          <h2 className=" flex w-full flex-col items-center text-center  text-6xl font-black uppercase  text-gray-800 dark:text-white ">
            {t('feature.header')}
          </h2>
        </header>
        <div className="relative z-20 flex w-full items-center justify-center  overflow-hidden bg-white dark:bg-gray-800">
          <div className="container relative mx-auto flex px-6 py-16">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-white" />
              <h2 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
                {t('feature.let_header')}
                <span className="text-5xl sm:text-7xl">
                  {t('feature.let_header_2')}
                </span>
              </h2>
              <p className="text-sm text-gray-700 dark:text-white sm:text-base">
                {t('feature.body')}
              </p>
              <div className="mt-8 flex   gap-4">
                <Button
                  variant="flat"
                  radius="lg"
                  size="md"
                  onClick={() => {
                    router.push('/products');
                  }}
                  className=" border-2 border-orange-500 bg-transparent text-xs uppercase  text-orange-500 hover:bg-orange-500 hover:text-white dark:text-white md:text-base"
                >
                  {t('feature.body_end')}
                </Button>
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <Image
                alt="Product image"
                width={4000}
                height={2666}
                src="/images/0-88041800-1663588519-800x800.jpg"
                className="m-auto max-w-xs md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
