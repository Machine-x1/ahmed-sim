/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unescaped-entities */
import { Button, Input, Textarea } from '@nextui-org/react';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

import Container from './Container';

const ContactForm = () => {
  return (
    <div className="w-full">
      <Container className="flex w-[80%] flex-col ">
        <div className="flex flex-col items-center  justify-center  py-8 text-2xl font-semibold ">
          Contact Form
          <hr className="my-6 flex h-0.5 w-1/2  items-center justify-center border-t-0 bg-neutral-900  opacity-100 dark:opacity-50" />
        </div>
        <div className=" mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2  xl:grid-cols-2">
          <div className="mx-auto flex h-full w-1/2 flex-col items-center justify-center gap-8">
            <h3>Contact Us Today!</h3>
            <p className="">
              " Please don't hesitate to contact us with any questions or
              concerns. If you need help with your order or need advice on your
              rig setup, we are here to help! One of our crew will gladly
              contact you as soon as we can to help you with your query."
            </p>
            <p>0429 502 409 (Mon-Fri 9AM-4PM)</p>
            <div>
              <div className="flex items-center gap-x-4">
                <Button
                  isIconOnly
                  color="default"
                  className="hover:bg-hoverTextColor"
                  aria-label="Like"
                >
                  <span className="socialLink  ">
                    <BsTwitter />
                  </span>
                </Button>
                <Button
                  className="hover:bg-hoverTextColor"
                  isIconOnly
                  color="default"
                  aria-label="Like"
                >
                  <span className="socialLink">
                    <BsFacebook />
                  </span>
                </Button>
                <Button
                  className="hover:bg-hoverTextColor"
                  isIconOnly
                  color="default"
                  aria-label="Like"
                >
                  <span className="socialLink">
                    <BsInstagram />
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mx-auto flex h-full w-1/2 flex-col  items-center  justify-center gap-8">
            <Input type="email" variant="underlined" label="Email" />
            <Textarea
              key=""
              variant="underlined"
              // label="Description"
              placeholder="Enter your description"
              disableAnimation
              disableAutosize
              classNames={{
                base: 'max-w-xs',
                input: 'resize-y min-h-[40px]',
              }}
            />
            <Button
              radius="none"
              className="  bg-hoverTextColor text-sm font-semibold uppercase text-white  duration-200 hover:bg-lightText "
            >
              Send
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
