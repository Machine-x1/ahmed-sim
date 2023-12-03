import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex h-20 cursor-pointer items-center justify-center   ">
        <Image
          alt="logo"
          src="/images/logo.svg"
          className=" h-20 "
          width={200}
          height={200}
        />
      </div>
    </Link>
  );
};

export default Logo;
