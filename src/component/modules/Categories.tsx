/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import { Button, Card, Image, Link } from '@nextui-org/react';

import Container from '@/component/modules/Container';

const callouts = [
  {
    name: 'steering wheels',
    description: 'Work from home accessories',
    imageSrc: '/images/RSV2R9.webp',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/products',
  },
  {
    name: 'accessories',
    description: 'Journals and note-taking',
    imageSrc: '/images/steercat.webp',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/products',
  },
  {
    name: 'pedals',
    description: 'Daily commute essentials',
    imageSrc: '/images/RSV2R9.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products',
  },
  {
    name: ' bundels',
    description: 'Daily commute essentials',
    imageSrc: '/images/steercat.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products',
  },
  {
    name: 'wheelBasis',
    description: 'Daily commute essentials',
    imageSrc: '/images/RSV2R9.webp',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products',
  },
  {
    name: 'Digital Dashes',
    description: 'Daily commute essentials',
    imageSrc: '/images/simagic-p1000-sim-racing-pedal-set-side.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/products',
  },
];

export default function Categories() {
  // const router = useRouter();
  return (
    <div className=" bg-hoverTextColor ">
      <Container className=" ">
        <div className="  grid h-full w-full  grid-cols-3 items-center justify-center  gap-4 md:grid-cols-6    ">
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
                >
                  <Image
                    isZoomed
                    removeWrapper
                    width="100%"
                    height="100%"
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className=" object-fit h-full w-full"
                  />
                </Button>
              </Card>
              <Link href={callout.href} className="mt-2 text-white">
                <span>{callout.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
