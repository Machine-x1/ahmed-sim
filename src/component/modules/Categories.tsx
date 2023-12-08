/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { Button, Card, Image } from '@nextui-org/react';
import Link from 'next/link';

import Container from '@/component/modules/Container';

const callouts = [
  {
    name: 'steering wheels',
    description: 'Work from home accessories',
    imageSrc: '/images/RSV2R9.webp',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#steerWheels',
  },
  {
    name: 'accessories',
    description: 'Journals and note-taking',
    imageSrc: '/images/Wireless-Technology.webp',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#accessories',
  },
  {
    name: 'pedals',
    description: 'Daily commute essentials',
    imageSrc: '/images/RSV2R9.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#pedals',
  },
  {
    name: ' bundels',
    description: 'Daily commute essentials',
    imageSrc: '/images/R5-Bundle-1_1000x.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#Bundles',
  },
  {
    name: 'wheelBasis',
    description: 'Daily commute essentials',
    imageSrc: '/images/R16-1.avif',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#wheelBasis',
  },
  {
    name: 'Digital Dashes',
    description: 'Daily commute essentials',
    imageSrc: '/images/IMG_0815.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#DigitalDashes',
    // href: '#cockfits',
  },
  // {
  //   name: 'cockfits',
  //   description: 'Daily commute essentials',
  //   imageSrc: '/images/RSV2_R16_RM_280x315@2x.webp',
  //   imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
  //   href: '#cockfits',
  // },
];
export default function Categories(props: any) {
  const { onChange, value, onClick } = props;
  // const router = useRouter();
  return (
    <div className=" bg-bodyColor pt-6 ">
      <Container className="px-4 ">
        <div className="  grid h-full w-full  grid-cols-3 items-center justify-center  gap-4 md:grid-cols-6 ">
          {callouts.map((callout) => (
            <div
              key={callout.name}
              className="flex flex-col items-center justify-center"
            >
              <Card shadow="sm" fullWidth className="h-28 w-28   rounded-full ">
                <Button
                  isIconOnly
                  className="h-28 w-28 "
                  color="default"
                  radius="full"
                  variant="flat"
                  onClick={onClick}
                  onChange={onChange}
                  value={value}
                >
                  <Link href={callout.href}>
                    <Image
                      isZoomed
                      removeWrapper
                      width="100%"
                      height="100%"
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className=" object-fit h-full w-full"
                    />
                  </Link>
                </Button>
              </Card>
              {/* <a onClick={() => setActiveSection('steerWheels')}> */}
              <span className="mt-2 ">{callout.name}</span>
              {/* </a> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
