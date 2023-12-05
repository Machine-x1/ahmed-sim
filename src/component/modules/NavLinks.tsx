/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-array-index-key */

// 'use client';

// import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = () => {
  const pathname = usePathname();
  const links = [
    { text: 'Home', href: '/' },
    { text: 'Peddals', href: '/products/pedals' },
    { text: 'Steer-wheels', href: '/products/' },
    { text: 'Accessories', href: '/products/accessories' },
    { text: 'Contact-us', href: '/contactus' },
  ];
  const RenderLinks = () => {
    return links.map((link, index) => (
      <div
        key={index}
        className="hidden w-full flex-row items-center justify-center lg:flex  "
      >
        <Link
          href={link.href}
          className={` ${
            pathname === link.href ? ' active ' : ''
          }    text-lg font-bold text-white decoration-transparent duration-200 ease-in-out transition hover:decoration-inherit hover:underline-offset-4 `}
        >
          <div className="">{link.text}</div>
        </Link>
        {/* {index !== links.length - 1 && (
          <div className=" mx-auto flex items-center justify-center text-gray-50">
            |{' '}
          </div>
        )} */}
      </div>
    ));
  };
  return (
    <div className=" flex w-full flex-row items-center justify-center  md:justify-start   ">
      {RenderLinks()}
    </div>
  );
};

export default NavLinks;
