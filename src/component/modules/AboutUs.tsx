import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { MdOutlineLocalShipping } from 'react-icons/md';

import FeatureCard from './FeatureCard';

const AboutUs = () => {
  const { t } = useTranslation('common');
  return (
    <div className="w-full  ">
      <div className="bg-secondaryBlack">
        <section className="relative block  px-6 py-10 text-white md:px-10 md:py-20 ">
          <div className="relative mx-auto flex max-w-5xl  flex-col gap-4 text-center">
            <span>{t('about.destination')}</span>
            <h1 className="block  text-3xl font-bold text-slate-200 sm:text-4xl">
              {t('about.why')}
            </h1>
            <p className="mx-auto  w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
              {t('about.quality')}
            </p>
            <p className="mx-auto  w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide">
              {t('about.expert')}
            </p>
          </div>
          <div className=" flex w-full flex-col items-center justify-center  gap-20 pt-4 text-white md:flex-row ">
            <FeatureCard
              icon={<MdOutlineLocalShipping className="h-12 w-12" />}
              textKey="about.quick-drop"
            />
            <FeatureCard
              icon={
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
              }
              textKey="about.expert-guidance"
            />
            <FeatureCard
              icon={
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
              }
              textKey="quality-assurance"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
