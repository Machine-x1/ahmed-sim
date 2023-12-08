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
    imageSrc: '/images/steercat.webp',
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
    imageSrc: '/images/steercat.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#Bundles',
  },
  {
    name: 'wheelBasis',
    description: 'Daily commute essentials',
    imageSrc: '/images/RSV2R9.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#wheelBasis',
  },
  {
    name: 'Digital Dashes',
    description: 'Daily commute essentials',
    imageSrc: '/images/simagic-p1000-sim-racing-pedal-set-side.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#DigitalDashes',
    // href: '#cockfits',
  },
  {
    name: 'cockfits',
    description: 'Daily commute essentials',
    imageSrc: '/images/simagic-p1000-sim-racing-pedal-set-side.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#cockfits',
  },
];
export default function Categories(props: any) {
  const { onChange, value, onClick } = props;
  // const router = useRouter();
  return (
    <div className=" bg-hoverTextColor ">
      <Container className=" ">
        <div className="  grid h-full w-full  grid-cols-3 items-center justify-center  gap-4 md:grid-cols-7  ">
          {callouts.map((callout) => (
            <div
              key={callout.name}
              className="flex flex-col items-center justify-center"
            >
              <Card
                shadow="sm"
                fullWidth
                className="h-28 w-28  cursor-default rounded-full "
              >
                <Button
                  isIconOnly
                  className="h-auto w-auto cursor-default data-[hover]:bg-foreground/10"
                  radius="full"
                  variant="light"
                  color="secondary"
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
              <span className="mt-2 text-white">{callout.name}</span>
              {/* </a> */}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
