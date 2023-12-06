/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

import Container from '@/component/modules/Container';

const callouts = [
  {
    name: 'steeelwheels',
    description: 'Work from home accessories',
    imageSrc: '/images/R9-wheel-base.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: 'steeelwheels',
  },
  {
    name: 'accessories',
    description: 'Journals and note-taking',
    imageSrc: '/images/R9-wheel-base.png',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/accessories',
  },
  {
    name: 'pedals',
    description: 'Daily commute essentials',
    imageSrc: '/images/R9-wheel-base.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/pedals',
  },
];

export default function Categories() {
  const router = useRouter();
  return (
    <div className="">
      <Container className=" ">
        <div className="mb-4 flex w-full items-center justify-center py-4  ">
          <h2 className=" flex w-11/12  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
            <Divider className=" mx-auto  w-1/3" />
            Shop By Category
            <Divider className=" mx-auto w-1/3  " />
          </h2>
        </div>
        <div className="  grid h-full w-full  grid-cols-1 items-center  justify-center gap-4  md:grid-cols-3   ">
          {callouts.map((callout) => (
            <Card
              // isHoverable
              shadow="sm"
              isPressable
              onPress={() => console.log('item pressed')}
              fullWidth
              className="group h-full w-full"
              key={callout.name}
            >
              <CardBody className="  relative w-full overflow-visible  bg-white p-0 group-hover:opacity-75 ">
                <Image
                  isZoomed
                  width="100%"
                  height="100%"
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className=" object-fit h-full  max-h-[350px] w-full"
                />
              </CardBody>
              <CardFooter
                hidden
                className=" absolute  top-40  flex w-full flex-col items-center justify-center gap-2"
              >
                <div className="flex h-full w-full flex-col items-center justify-center   ">
                  <h2 className="text-body-color dark:text-dark-6 text-2xl font-semibold   hover:transition">
                    {callout.name}
                  </h2>
                  <hr className=" flex h-0.5 w-1/2  items-center justify-center border-t-0 bg-neutral-900  opacity-100 dark:opacity-50" />
                </div>
                {/* U have to be kidding me  */}
                {/* You adding button inside a button */}
                <div
                  role="presentation"
                  onClick={() => router.push(callout.href)}
                  className=" overflow-hidden rounded bg-hoverTextColor px-4 py-2 text-sm font-bold uppercase text-white duration-200 hover:bg-orange-400 hover:transition"
                >
                  Shop Now
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
