/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-custom-classNamename */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function ProductFeatures() {
  return (
    <div className="bg-secondaryBlack">
      <main className="relative h-[600px] overflow-hidden bg-white dark:bg-gray-800">
        <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
          <div className="container relative mx-auto flex px-6 py-16">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-white" />
              <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
                Be on
                <span className="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p className="text-sm text-gray-700 dark:text-white sm:text-base">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div className="mt-8 flex items-center justify-center gap-6">
                <Button className="text-md  rounded-lg border-2 border-transparent bg-orange-500 px-4 py-2 uppercase text-white hover:bg-orange-400">
                  Get started
                </Button>
                <Button className="text-md rounded-lg border-2 border-orange-500 bg-transparent px-4 py-2 uppercase text-orange-500 hover:bg-orange-500 hover:text-white dark:text-white">
                  Read more
                </Button>
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <Image
                alt="Product image"
                width={1000}
                height={1000}
                src="/images/RSV2R9.webp"
                className="m-auto max-w-xs md:max-w-sm"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
