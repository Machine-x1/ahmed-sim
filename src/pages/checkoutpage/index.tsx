/* eslint-disable react/button-has-type */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

import { Meta } from '@/component/layouts/Meta';
import Container from '@/component/modules/Container';
import { Main } from '@/component/templates/Main';

const index = () => {
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <div>
        <Container className="w-full">
          <div className="flex w-full flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
            <h2 className="text-2xl font-bold text-gray-800">
              payment Checkout
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 ">
            <div className="px-4 pt-8">
              <p className="text-xl font-medium">Order Summary</p>
              <p className="text-gray-400">
                Check your items. And select a suitable shipping method.
              </p>
              <div className="mt-8 space-y-3  overflow-auto rounded-lg border bg-white px-2 py-4 sm:px-6">
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                  <Image
                    width={100}
                    height={100}
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src="/images/pr1.jpeg"
                    alt=""
                  />
                  <div className="flex w-full flex-col p-4">
                    <span className="font-semibold">Steer-wheelSmr1</span>
                    <span className="float-right text-gray-400">
                      42EU - 8.5US
                    </span>
                    <p className="text-lg font-bold">$138.99</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-lg font-medium">Shipping Methods</p>
              <form className="mt-5 grid gap-6">
                <div className="relative">
                  <input
                    className="peer hidden"
                    id="radio_1"
                    type="radio"
                    name="radio"
                    checked
                  />
                  <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white peer-checked:border-gray-700" />
                  <label
                    className="flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                    htmlFor="radio_1"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-14 object-contain"
                      src="/images/naorrAeygcJzX0SyNI4Y0.png"
                      alt=""
                    />
                    <div className="ml-5">
                      <span className="mt-2 font-semibold">Fedex Delivery</span>
                      <p className="text-sm leading-6 text-slate-500">
                        Delivery: 2-4 Days
                      </p>
                    </div>
                  </label>
                </div>
              </form>
            </div>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
              <p className="text-xl font-medium">Payment Details</p>
              <p className="text-gray-400">
                Complete your order by providing your payment details.
              </p>
              <div className="">
                <label
                  htmlFor="email"
                  className="mb-2 mt-4 block text-sm font-medium"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="your.email@gmail.com"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinejoin="round"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-holder"
                  className="mb-2 mt-4 block text-sm font-medium"
                >
                  Card Holder
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="card-holder"
                    name="card-holder"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your full name here"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>
                <label
                  htmlFor="card-no"
                  className="mb-2 mt-4 block text-sm font-medium"
                >
                  Card Details
                </label>
                <div className="flex">
                  <div className="relative w-7/12 flex-shrink-0">
                    <input
                      type="text"
                      id="card-no"
                      name="card-no"
                      className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="xxxx-xxxx-xxxx-xxxx"
                    />
                  </div>
                  <input
                    type="text"
                    name="credit-expiry"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="MM/YY"
                  />
                  <input
                    type="text"
                    name="credit-cvc"
                    className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="CVC"
                  />
                </div>
                <label
                  htmlFor="billing-address"
                  className="mb-2 mt-4 block text-sm font-medium"
                >
                  Billing Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      type="text"
                      id="billing-address"
                      name="billing-address"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Street Address"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <Image
                        width={100}
                        height={100}
                        className="h-4 w-4 object-contain"
                        src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  {/* <Select
                  id="billing-state"
                  name="billing-state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">State</option>
                </Select> */}
                  <input
                    type="text"
                    name="billing-zip"
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500 sm:w-1/6"
                    placeholder="ZIP"
                  />
                </div>

                {/* <!-- Total --> */}
                <div className="mt-6 border-y py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Subtotal
                    </p>
                    <p className="font-semibold text-gray-900">$399.00</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      Shipping
                    </p>
                    <p className="font-semibold text-gray-900">$8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    $408.00
                  </p>
                </div>
              </div>
              <Button className="mb-8 mt-4 w-full rounded-md bg-mainOrange px-6 py-3 font-medium text-white">
                Place Order
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </Main>
  );
};

export default index;
