/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable tailwindcss/no-custom-classname */

// 'use client';

import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

import Logo from './Logo';

const Footer = () => {
  return (
    <div className=" mx-auto max-w-[1920px]">
      <footer className=" bg-hoverTextColor text-slate-200 lg:text-left">
        {/* <!-- Main container div: holds the entire content of the footer --> */}
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2  lg:grid-cols-4 ">
            {/* <!-- Logo section --> */}
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                <Logo />
              </h6>
              <p>
              "Welcome to Sim Racing Corner, your ultimate destination for all things sim racing! Explore a wide selection of high-quality racing simulators, steering wheels, pedals, seats, and accessories to elevate your virtual racing experience. Our commitment to providing top-notch products ensures you get the best gear to fuel your passion for racing. For inquiries, support, or more information, contact us . Join the thrill of virtual racing with SRC today!"
              </p>
           
            </div>
        
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Stay Connected with SRC
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
              Follow Us on Social Media: Get instant updates, behind-the-scenes content, and interact with fellow racers. Find us on [Facebook, Twitter, Instagram, etc.] for a dose of sim racing excitement.</p>
             <div className='flex  gap-6 '>
              <Link href="/">
                <p className="cursor-pointer duration-200 "><BsFacebook /></p>
              </Link>
              <Link href="/">
                <p className="cursor-pointer duration-200"><BsTwitter /></p>
              </Link>
              <Link href="/">
                <p className="cursor-pointer duration-200"><BsInstagram /></p>
              </Link>
              </div>
              <div className="mt-4">
              <h6 className="flex justify-center font-semibold uppercase md:justify-start">
                credits
              </h6>
                <Link href="https://www.freepik.com/free-photo/car-racing-video-game-arcade_12187496.htm#query=racing%20simulator&position=1&from_view=search&track=ais&uuid=8bdc8df3-3134-4adb-9fbd-3b46a84dd8e3">Image by rawpixel.com</Link> on Freepik
              <Link href="http://www.freepik.com">Designed by Freepik</Link>
            </div>
            </div>
            {/* <!-- Contact section --> */}
            <div className="" >
              <h6 className="mb-4  flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                info@example.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 89
              </p>
            </div>
                {/* <!-- Products section --> */}
                <div className="w-full">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              About Us
              </h6>
              <p className="flex items-center justify-center md:justify-start">
              SRC was founded by passionate sim racing enthusiasts committed to enhancing the virtual racing experience. Our goal is clear: to offer top-notch sim racing equipment and accessories that elevate the gaming experience for all levels of racers.

We meticulously curate our product range, ensuring every item meets rigorous standards of quality, performance, and innovation. From beginners to seasoned racers, we're dedicated to providing cutting-edge gear that resonates with the dynamic needs of the sim racing community.
</p>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="flex items-center justify-center gap-4 bg-hoverTextColor text-center dark:bg-neutral-700">
          <span>© 2023 Copyright:</span>
          <a
            className="font-semibold text-secondaryBlack dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            BitsBytes
          </a>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
