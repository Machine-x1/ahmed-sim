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
      name: 'Dashboard',
      href: '/dashboard',
    },
    {
      name: 'Accessories',
      href: '/accessories',
    },
    {
      name: 'steer-wheels',
      href: '/products',
    },
    {
      name: 'peddals',
      href: '/peddals',
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

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      className="w-full  bg-hoverTextColor "
    >
      {/* <div className="sticky top-0  z-50 flex h-20 w-full  bg-hoverTextColor "> */}

      <NavbarContent className="text-slate-200 lg:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden items-center  gap-4 sm:flex"
        justify="center"
      >
        <NavbarBrand className=" ">
          <Logo />
          {/* <p className="font-bold text-inherit"></p> */}
        </NavbarBrand>
        <NavbarItem
          className={`${
            pathname === '/products/' && 'active texr-white font-bold  '
          }`}
        >
          <Link href="/products" className="text-slate-200">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${pathname === '/' && 'active texr-white font-bold  '}`}
        >
          <Link href="/" className="text-slate-200" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem
          className={`${
            pathname === '/contact-us' && 'active font-bold text-white '
          }`}
        >
          <Link href="/contact-us" className="text-slate-200">
            Contact-us
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
