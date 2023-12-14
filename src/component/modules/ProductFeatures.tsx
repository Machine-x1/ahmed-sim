/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProductFeatures() {
  const router = useRouter();
  return (
    <div className="bg-secondaryBlack   ">
      <main className=" relative  h-auto overflow-hidden bg-white dark:bg-gray-800">
        <header className="mt-12">
          <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white ">
            {/* Moza Racing R16 Direct Drive Steering System */}
          </h1>
        </header>
        <div className="relative z-20 flex items-center overflow-hidden bg-white dark:bg-gray-800">
          <div className="container relative mx-auto flex px-6 py-16">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="mb-12 h-2 w-20 bg-gray-800 dark:bg-white" />
              <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
              Let's Race

<span className="text-5xl sm:text-7xl"> Together</span>
              </h1>
              <p className="text-sm text-gray-700 dark:text-white sm:text-base">
              Ready to elevate your sim racing experience? Dive into our collection, explore the possibilities, and gear up for an adrenaline-fueled journey into the world of virtual racing.

Join us at Sim Racing Corner and let's rev up the excitement together!
              </p>
              <div className="mt-8 flex items-center justify-center gap-6">
                <Button onClick={() => {router.push('/products')}}  className="text-md rounded-lg border-2 border-orange-500 bg-transparent px-4 py-2 uppercase text-orange-500 hover:bg-orange-500 hover:text-white dark:text-white">
                  Read more
                </Button>
              </div>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <Image
                alt="Product image"
                width={1000}
                height={1000}
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
