/* eslint-disable tailwindcss/no-custom-classname */
import { AvatarIcon } from '@nextui-org/react';
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';

const DateTime = () => {
  return (
    <div className="text-dark-gray border-light-gray max-w-[360px] border-b border-solid font-semibold">
      <div className="mb-3 w-full">
        <Image
          className="w-full rounded-xl"
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
          priority
        />
      </div>

      <h3 className="text-lg">aswan - aswan center - beside aswan center</h3>
      <div className="my-6 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <span className="text-primary-gray h-5 w-5 rounded-full">
            <AvatarIcon />{' '}
          </span>
          <span>Ahmed adel ewis</span>
        </div>
        <div className="flex items-center gap-4">
          <BiCalendar />
          <span>7/11/2023</span>
        </div>
        <div className="flex items-center gap-4">
          <FiClock />
          <span>7:41 PM</span>
        </div>
      </div>
    </div>
  );
};
export default DateTime;
