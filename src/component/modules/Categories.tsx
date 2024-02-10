import { Button, Card, Image } from '@nextui-org/react';
import Link from 'next/link';

import { callouts } from '@/apps/json/callouts';
import Container from '@/component/modules/Container';

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
                      className="  h-full w-full"
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
