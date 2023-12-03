/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdCart } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

// import { addUser, deleteUser } from '@/redux/shoppingSlice';
import Container from './Container';
import FormattedPrice from './FormattedPrice';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  const dispatch = useDispatch();
  const { productData, orderData } = useSelector(
    (state: any) => state.shopping
  );

  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: any) => {
      return (amt += item.price * item.quantity);
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className="flex-no-wrap  sticky  top-0  z-50 flex h-20  w-full items-center justify-between  bg-hoverTextColor">
      {/* <div className="sticky top-0  z-50 flex h-20 w-full  bg-hoverTextColor "> */}
      <Container className="flex  h-full w-full items-center justify-between md:justify-start md:gap-x-5">
        <Logo />
        {/* Search Field */}
        <div className="group  hidden w-1/2 items-center gap-x-1 rounded-full border-[1px] border-lightText/50 bg-white px-4 py-1.5 focus-within:border-white md:flex">
          <FiSearch className="text-gray-500 duration-200 group-focus-within:text-darkText" />
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 outline-none placeholder:text-sm"
          />
        </div>
        <NavLinks />
        <Link href="/cart">
          <div className="relative flex items-center justify-center gap-x-1 rounded-full border-[1px] border-hoverTextColor bg-hoverTextColor px-3 py-1.5 text-slate-100 duration-200 hover:border-orange-600 ">
            <IoMdCart className="text-xl" />
            <p className="text-sm font-semibold">
              <FormattedPrice amount={0} />
            </p>
            <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-orange-600 shadow-xl shadow-black">
              {0}
            </span>
          </div>
        </Link>
        {/* {orderData?.order?.length > 0 && (
          <Link href="/order" className=" cursor-pointer gap-x-1 px-2">
            <BsBookmarks className="text-2xl" />
            <p className="text-sm font-semibold">Orders</p>
          </Link>
        )} */}
      </Container>
      {/* </div> */}

      {/* <div className="flex  h-full  w-full items-center justify-between bg-hoverTextColor md:justify-start md:gap-x-5">
        <NavLinks />
      </div> */}
    </div>
  );
};

export default Header;
