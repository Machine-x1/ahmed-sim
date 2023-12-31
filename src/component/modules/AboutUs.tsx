/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable tailwindcss/no-custom-classname */
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { MdOutlineDeliveryDining } from 'react-icons/md';

const AboutUs = () => {
  const { t } = useTranslation('common');
  return (
    <div className="w-full ">
      <div className="bg-secondaryBlack">
        <section
          id="features"
          className="relative block  px-6 py-10 text-white md:px-10 md:py-20 "
        >
          <div className="relative mx-auto flex max-w-5xl  flex-col gap-4 text-center">
            <span>{t('about.destination')}</span>
            <h1 className="block  text-3xl font-bold text-slate-200 sm:text-4xl">
              {t('about.why')}{' '}
            </h1>
            <p className="mx-auto  w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
              {t('about.quality')}
            </p>
            <p className="mx-auto  w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
              {t('about.expert')}
            </p>
          </div>
          <div className="gap flex w-full flex-col items-center justify-center  gap-20 pt-4 text-white md:flex-row ">
            <div className="inline-flex h-[230px] w-[270px] items-center justify-center  px-[35px] py-8 shadow">
              <div className="flex h-[161px] w-64 flex-col items-center justify-center gap-4 ">
                <MdOutlineDeliveryDining className="h-12 w-12" />
                <p className=" text-white-600 text-center">
                  {t('about.quick-drop')}
                </p>
              </div>
            </div>
            <div className="inline-flex h-[230px] w-[270px] items-center justify-center px-[35px]  py-8 text-white shadow">
              <div className="flex h-[161px] w-64 flex-col items-center justify-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                <p className="text-white-600">{t('about.expert-guidance')}</p>
              </div>
            </div>

            <div className="inline-flex h-[230px] w-[270px] items-center justify-center  px-[35px] py-8 shadow">
              <div className="flex h-[161px] w-64 flex-col items-center justify-center gap-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <p className="text-white-600">{t('quality-assurance')} </p>
              </div>
            </div>
          </div>
          {/* // */}
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

{
  /* <div className="w-[270px] h-[230px] px-[35px] py-8 bg-red-500 rounded shadow justify-center items-center inline-flex">
<div className="flex-col justify-start items-center gap-6 inline-flex">
<div className="w-20 h-20 relative">
<div className="w-20 h-20 left-0 top-0 absolute">
<div className="w-20 h-20 left-0 top-0 absolute opacity-30 bg-white rounded-full" />
<div className="w-[58px] h-[58px] left-[11px] top-[11px] absolute bg-white rounded-full" />
</div>
<div className="w-10 h-10 left-[20px] top-[20px] absolute" />
</div>
<div className="flex-col justify-start items-center gap-2 flex">
<div className="text-white text-[32px] font-bold font-['Inter'] leading-[30px] tracking-wider">33k</div>
<div className="text-white text-base font-normal font-['Poppins'] leading-normal">Mopnthly Produduct Sale</div>
</div>
</div>
</div> */
}
