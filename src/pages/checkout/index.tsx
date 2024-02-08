/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/button-has-type */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { BiShield } from 'react-icons/bi';

import { Meta } from '@/component/layouts/Meta';
import Container from '@/component/modules/Container';
import DateTime from '@/component/modules/DateTime';
import HeadingAndPara from '@/component/modules/HeadingAndPara';
import InputField from '@/component/modules/InputField';
import TotalPrice from '@/component/modules/TotalPrice';
import { Main } from '@/component/templates/Main';

const index = () => {
  return (
    <Main meta={<Meta />}>
      <Container className="mx-auto mt-14 h-full min-h-screen w-full   max-w-[1920px] ">
        <div className="border-light-gray my-10 flex flex-col-reverse justify-between border-b border-solid pb-6 md:mb-16 md:mt-24 md:flex-row">
          <div className="md:border-light-gray mt-10 md:mt-0 md:border-r md:border-solid md:pr-6">
            <h1 className="text-dark-gray mb-16 hidden text-5xl font-semibold md:block">
              Confirm and pay
            </h1>

            <HeadingAndPara
              title="Enter your details"
              para="We'll be sending your checkout confirmation to the details below."
              className="mb-8"
            />
            <div className="mb-11 grid gap-6 py-2 xl:grid-cols-2">
              <InputField
                type="text"
                label="Full Name"
                placeholder="Enter full name"
              />
              <InputField
                type="number"
                label="Phone no"
                placeholder="Enter phone no."
              />
              <InputField
                type="text"
                label="Full name"
                placeholder="Enter full name"
              />
              <InputField
                type="email"
                label="email"
                placeholder="Enter email"
              />
            </div>

            <HeadingAndPara
              title="Additional information"
              para="We need a few more details to complete your reservation."
              className="mb-8"
            />
            <div className="mb-11 grid gap-6 py-2 xl:grid-cols-2">
              <InputField
                type="text"
                label="Full Name"
                placeholder="Enter full name"
              />
              <InputField
                type="number"
                label="Phone no"
                placeholder="Enter phone no."
              />
            </div>

            <div className="mb-10">
              <h2 className="text-dark-gray mb-1 text-lg font-semibold md:text-2xl">
                Total: 25,000
              </h2>
              <p className="text-primary-gray text-xs underline">
                You will pay in KWD
              </p>
            </div>

            <div>
              <p className="text-primary-gray mb-3 text-xs">
                With payment, you agree to the general{' '}
                <span className="text-[#1733B6]">
                  terms and conditions of website
                </span>{' '}
                & the <span className="text-[#1733B6]">activity provider.</span>
              </p>

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-5 py-3 font-semibold text-white md:w-auto">
                Confirm and pay <BiShield />
              </button>
            </div>
          </div>

          <div className="flex flex-col  gap-12">
            <h1 className="text-dark-gray mb-10 text-3xl font-semibold md:hidden">
              Confirm and pay
            </h1>
            <DateTime />
            <TotalPrice />
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default index;
