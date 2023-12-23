import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href="/"
      rel="noopener noreferrer"
      aria-label="logo"
      className="cursor-pointer"
    >
      <div className="flex h-20 cursor-pointer items-center justify-center   ">
        <Image
          alt="logo"
          src="/images/logo.svg"
          className="   h-full w-full object-contain object-center  "
          width={100}
          height={100}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
