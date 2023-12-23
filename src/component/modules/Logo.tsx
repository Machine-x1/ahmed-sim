import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div className="flex h-20  items-center justify-center   ">
      <Image
        alt="sim racing corner logo"
        src="/images/logo.svg"
        className="   h-full w-full object-contain object-center  "
        width={100}
        height={100}
        priority
      />
    </div>
  );
};

export default Logo;
