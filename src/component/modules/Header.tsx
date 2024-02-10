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
import React from 'react';
import { IoMdCart } from 'react-icons/io';
import { MdLanguage } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { menuItems } from '@/apps/json/menuitems';
import type { RootState } from '@/apps/redux/store';

import FormattedPrice from './FormattedPrice';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const pathname = usePathname();
  const { cart } = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const lang = router.locale;
  const { t } = useTranslation('navbar');
  const handleCartClick = () => {
    router.push('/cart');
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cart.products) {
      totalPrice += product.price * product.purchased_quantity;
    }
    return totalPrice;
  };
  const total = calculateTotalPrice();
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      disableAnimation
      isBordered
      disableScrollHandler
      isBlurred
      position="sticky"
      aria-label="Main Navigation"
      className=" fixed top-0 z-50 flex w-full   bg-hoverTextColor "
    >
      <NavbarContent className="text-slate-200 lg:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden items-center gap-10  text-xl    xl:flex "
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem
            key={item.name}
            className={`${' font-bold   text-white '}`}
          >
            <button
              aria-label={item.name}
              disabled={pathname === item.href}
              type="button"
              onClick={() => router.push(item.href)}
              className="cursor-pointer text-lg text-slate-200"
            >
              {t(item.name)}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" flex">
          <button aria-label="cart" type="button" onClick={handleCartClick}>
            <div className="relative flex items-center justify-center gap-x-1  rounded-full border-[1px] border-solid border-white bg-hoverTextColor px-3 py-1.5 text-slate-100  duration-200 hover:cursor-pointer hover:bg-white  hover:text-hoverTextColor ">
              <IoMdCart className="text-xl  " />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={total} />
              </p>
              <span className="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full  bg-white text-xs font-semibold text-orange-600 shadow-xl shadow-black">
                {cart.products.length}
              </span>
            </div>
          </button>
        </NavbarItem>
        <NavbarItem className="flex">
          <div className="relative flex items-center justify-center gap-x-1 rounded-full border-[1px] border-solid border-white bg-hoverTextColor  px-3 py-1.5  text-slate-100 duration-200 hover:cursor-pointer hover:bg-white  hover:text-hoverTextColor ">
            {lang === 'ar' && (
              <a href="/en">
                <h2> الإنجليزية</h2>
              </a>
            )}
            {lang === 'en' && (
              <a href="/ar">
                <h2>Arabic</h2>
              </a>
            )}

            <MdLanguage className="text-xl" />
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={`${item.key}`}>
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
