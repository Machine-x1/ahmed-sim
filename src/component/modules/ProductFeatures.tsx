/* eslint-disable tailwindcss/no-custom-classname */

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

export default function ProductFeatures() {
  const router = useRouter();
  const { t } = useTranslation('common');
  return (
    <div className="relative h-auto max-w-full lg:h-[700px]">
      <div className="absolute inset-0">
        <Image
          src="/images/ban2.png"
          alt="Small Banner"
          fill
          className="object-cover object-center "
          quality={75}
          priority
        />
      </div>
      <main className="  relative flex h-auto flex-col  justify-center     overflow-hidden   lg:h-[700px]">
        <div className="  flex w-full  items-center   overflow-hidden  ">
          <div className="  mx-24 flex flex-row items-center justify-center px-12  lg:flex-col ">
            <header className="flex flex-col  items-center justify-center  ">
              <h1 className=" flex flex-col  text-4xl font-extrabold uppercase  text-secondaryBlack  lg:text-8xl  ">
                {t('feature.header')}
              </h1>
              <h2 className=" flex flex-col items-center justify-center text-2xl font-bold uppercase  text-secondaryBlack  ">
                {t('feature.let_header')}
                <span className="text-xl ">{t('feature.let_header_2')}</span>
              </h2>
            </header>
            <div className="mt-8 flex gap-4">
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
      </main>
    </div>
  );
}
