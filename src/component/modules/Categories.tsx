/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Container from './Container';

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
  return (
    <div className="">
      <Container className=" ">
        <div className=" flex items-center justify-center gap-2 pb-8 text-2xl font-semibold ">
          <hr className="my-6 flex h-0.5 items-center  justify-center border-t-0 bg-neutral-900 opacity-100  dark:opacity-50 md:w-1/4" />
          <h1 className=" flex w-fit items-center justify-center text-2xl font-semibold ">
            Shop By Category
          </h1>
          <hr className="my-6 flex h-0.5 items-center  justify-center border-t-0 bg-neutral-900 opacity-100  dark:opacity-50 md:w-1/4" />
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
                <Link href={{ pathname: `${callout.href}` }}>
                  <motion.button
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0 }}
                  >
                    <Button
                      radius="none"
                      className=" overflow-hidden bg-hoverTextColor text-sm font-semibold uppercase  text-white duration-200 "
                    >
                      Shop Now
                    </Button>
                  </motion.button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
