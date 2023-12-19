/* eslint-disable import/no-extraneous-dependencies */
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
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
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
      name: 'dashboard',
      href: '/admin',
    },
    {
      name: 'accessories',
      href: '/products/#accessories',
    },

    {
      name: 'steerWheels',
      href: '/products/#steerWheels',
    },
    {
      name: 'peddals',
      href: '/products/#peddals',
    },
    {
      name: 'bundles',
      href: '/products/#Bundles',
    },

    {
      name: 'wheelBases',
      href: '/products/#wheelBases',
    },
    {
      name: 'digitalDashes',
      href: '/products/#DigitalDashes',
    },
  ];
  const pathname = usePathname();
  const { cart } = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const lang = router.locale;
  const { t } = useTranslation('navbar');
  const handleCartClick = () => {
    router.push('/cart');
  };
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
        className="hidden items-center gap-10  text-xl capitalize   xl:flex "
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem
            key={item.name}
            className={`${
              pathname === '/contact-us/' && 'active font-bold   text-white '
            }`}
          >
            <div
              onClick={() => router.push(item.href)}
              className="cursor-pointer text-lg text-slate-200"
            >
              {t(item.name)}
            </div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" flex">
          <div onClick={handleCartClick}>
            <div className="relative flex items-center justify-center gap-x-1  rounded-full border-[1px] border-solid border-white bg-hoverTextColor px-3 py-1.5 text-slate-100  duration-200 hover:cursor-pointer hover:bg-white  hover:text-hoverTextColor ">
              <IoMdCart className="text-xl  " />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={0} />
              </p>
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full  bg-white text-xs font-semibold text-orange-600 shadow-xl shadow-black">
                {cart.products.length}
              </span>
            </div>
          </div>
          {/* {orderData?.order?.length > 0 && (
            <Link href="/order" className=" cursor-pointer gap-x-1 px-2">
              <BsBookmarks className="text-2xl" />
              <p className="text-sm font-semibold">Orders</p>
            </Link>
          )} */}
        </NavbarItem>
        <NavbarItem className="flex">
          <div className="relative flex items-center justify-center gap-x-1 rounded-full border-[1px] border-solid border-white bg-hoverTextColor  px-3 py-1.5  text-slate-100 duration-200 hover:cursor-pointer hover:bg-white  hover:text-hoverTextColor ">
            {lang === 'ar' ? (
              <a href="/en">
                <h2 className="font-poppins"> الإنجليزية</h2>
              </a>
            ) : (
              <a href="/ar">
                <h2 className="font-somar">Arabic</h2>
              </a>
            )}
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={pathname === item.href ? 'primary' : 'foreground'}
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
