/* eslint-disable tailwindcss/no-custom-classname */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React from 'react';
import { MdAdminPanelSettings, MdLanguage } from 'react-icons/md';

import Logo from './Logo';

const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const lang = 'en';
  return (
    <div className="sticky top-0 z-50">
      <Navbar
        disableAnimation
        disableScrollHandler
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
        position="static"
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

        <NavbarContent justify="end">
          <NavbarItem className=" flex">
            <div className="">
              <div className="relative flex items-center justify-center gap-x-1  rounded-full border-[1px] border-solid border-white bg-hoverTextColor px-3 py-1.5 text-slate-100  duration-200  hover:bg-white  hover:text-hoverTextColor ">
                <MdAdminPanelSettings className="text-xl  " />
                <h2 className="">Admin</h2>
              </div>
            </div>
          </NavbarItem>
          <NavbarItem className="flex">
            <div className="relative flex items-center justify-center gap-x-1 rounded-full border-[1px] border-solid border-white bg-hoverTextColor  px-3 py-1.5  text-slate-100 duration-200 hover:cursor-pointer hover:bg-white  hover:text-hoverTextColor ">
              {lang === 'en' ? (
                <a href="/en">
                  <h2 className=""> الإنجليزية</h2>
                </a>
              ) : (
                <a href="/ar">
                  <h2 className="">Arabic</h2>
                </a>
              )}
              <MdLanguage className="text-xl" />
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default AdminNav;
