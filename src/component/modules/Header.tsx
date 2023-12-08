/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { usePathname } from 'next/navigation';
// import Link from 'next/link';
import React from 'react';
import { IoMdCart } from 'react-icons/io';
import { useSelector } from 'react-redux';

import type { RootState } from '@/apps/redux/store';

import FormattedPrice from './FormattedPrice';
import Logo from './Logo';

const Header = () => {
  // const dispatch = useDispatch();
  // const { productStore, orderData } = useSelector(
  //   (state: any) => state.shopping
  // );
  // const [totalAmt, setTotalAmt] = useState(0);
  // useEffect(() => {
  //   let amt = 0;
  //   productStore.map((item: Product) => {
  //     return (amt += item.price * item.__v);
  //   });
  //   setTotalAmt(amt);
  // }, [productStore]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: ' DASHBOARD',
      href: '/dashboard',
    },
    {
      name: 'ACCESSORIES',
      href: '/accessories',
    },
    {
      name: 'STEER-WHEELS',
      href: '/products',
    },
    {
      name: 'PEDDALS',
      href: '/peddals',
    },
    {
      name: ' BUNDLES',
      href: '/products',
    },

    {
      name: 'WHEEL BASIS',
      href: '/about-us',
    },
    {
      name: 'CONTACT-US',
      href: '/contact-us',
    },
    {
      name: 'CART',
      href: '/cart',
    },
    {
      name: 'Digital Dashes',
      href: '/Digital-Dashes',
    },
  ];
  // 'Home',
  // 'Dashboard',
  // 'Accessories',
  // 'steer-wheels',
  // 'peddals',
  // 'cart',
  // 'products',
  const pathname = usePathname();
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <Navbar
      isBordered
      isBlurred
      disableAnimation
      disableScrollHandler
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      height="90px"
      position="sticky"
      className="z-50 flex w-full bg-hoverTextColor "
    >
      {/* <div className="sticky top-0  z-50 flex h-20 w-full  bg-hoverTextColor "> */}

      <NavbarContent className="text-slate-200 lg:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden items-center gap-10  text-xl capitalize   lg:flex "
        justify="center"
      >
        {/* <NavbarBrand className=" ">
          <Link href="/" className="text-slate-200">
            <Logo />
          </Link>
        </NavbarBrand> */}
        <NavbarItem
          className={` ${
            pathname === '/WheelBases' && 'active font-bold text-white  '
          }`}
        >
          <Link href="/WheelBases" className=" text-xl text-slate-200  ">
            WHEEL BASES
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === '/products' && 'active font-bold  text-white  '
          }`}
        >
          <Link
            href="/products"
            className=" text-xl text-slate-200  "
            aria-current="page"
          >
            BUNDLES
          </Link>
        </NavbarItem>

        <NavbarItem
          className={`${
            pathname === '/SteerWheels' && 'active font-bold text-white '
          }`}
        >
          <Link href="/SteerWheels" className="text-xl  text-slate-200">
            STEERING WHEELS
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === '/pedals' && 'active font-bold text-white '
          }`}
        >
          <Link href="/pedals" className="text-xl text-slate-200 ">
            PEDALS
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === '/accessories' && 'active font-bold text-white '
          }`}
        >
          <Link href="/accessories" className="text-xl text-slate-200  ">
            ACCESSORIES
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === '/accessories' && 'active font-bold text-white '
          }`}
        >
          <Link href="/Digital-Dashes" className="text-xl text-slate-200 ">
            Digital Dashes
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === '/contact-us' && 'active font-bold text-white '
          }`}
        >
          <Link href="/contact-us" className="text-xl text-slate-200 ">
            CONTACT-US
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="/cart">
            <div className="relative flex items-center justify-center gap-x-1 rounded-full border-[1px] border-hoverTextColor bg-hoverTextColor px-3 py-1.5 text-slate-100 duration-200 hover:border-orange-600 ">
              <IoMdCart className="text-xl" />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={0} />
              </p>
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-semibold text-orange-600 shadow-xl shadow-black">
                {cart.products.length}
              </span>
            </div>
          </Link>
          {/* {orderData?.order?.length > 0 && (
            <Link href="/order" className=" cursor-pointer gap-x-1 px-2">
              <BsBookmarks className="text-2xl" />
              <p className="text-sm font-semibold">Orders</p>
            </Link>
          )} */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={pathname === item.href ? 'warning' : 'foreground'}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
