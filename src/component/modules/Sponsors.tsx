import { Divider, Image } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';

const Sponsors = () => {
  const { t } = useTranslation('common');
  return (
    <div className="h-full w-full bg-bodyColor ">
      <div className="mx-4 rounded-xl  pt-8 sm:mx-8 sm:max-w-5xl md:mx-auto">
        <div className="mx-auto mb-10 w-11/12 sm:w-2/3">
          <h1 className="pt-4 text-center text-3xl font-extrabold uppercase text-gray-800 focus:outline-none xl:text-4xl">
            {t('our-premium-partners')}
          </h1>
          <Divider className="mx-auto mt-3 " />
        </div>
        <div className=" flex w-full items-center justify-center px-4 sm:py-6">
          <div className="inset-0 flex w-1/4 items-center justify-center pb-16 contrast-75 drop-shadow-xl  duration-300 transition hover:scale-75 hover:contrast-100  xl:pb-10">
            <Image
              className="w-14  focus:outline-none sm:w-28 "
              src="/images/simagiclogo.webp"
              alt="simagiclogo"
              width={200}
              height={200}
            />
          </div>
          <div className="inset-0 flex w-1/4  items-center justify-center pb-16 contrast-75 drop-shadow-xl  duration-300 transition hover:scale-75 hover:contrast-100 xl:pb-10">
            <Image
              className=" w-14 focus:outline-none sm:w-28"
              width={200}
              height={200}
              src="/images/logo_50.webp"
              alt="moza racing logo"
            />
          </div>
          <div className="inset-0 flex w-1/4  items-center justify-center pb-16 contrast-75 drop-shadow-xl  duration-300 transition hover:scale-75 hover:contrast-100 xl:pb-10">
            <Image
              className=" w-14 focus:outline-none sm:w-28"
              width={200}
              height={200}
              src="/images/fanatec.png"
              alt="fanatec"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
