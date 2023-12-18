/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unescaped-entities */
import { Button, Divider, Input, Textarea } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { BsInstagram } from 'react-icons/bs';

import Container from './Container';

const ContactForm = () => {
  const { t } = useTranslation('common');
  return (
    <div className="w-full bg-bodyColor">
      <Container className="flex w-[80%] flex-col ">
        <div className="flex flex-col  items-center justify-center  py-8  text-2xl font-semibold uppercase ">
          {t('contact-us')}
          <Divider className="mx-auto mt-3 w-1/3" />
        </div>
        <div className=" mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 md:grid-cols-2  xl:grid-cols-2">
          <div className="mx-auto flex h-full w-1/2 flex-col items-center justify-center gap-8">
            <p className="">{t('contact-body')}</p>
            <p>+ 965 6939 9851</p>
            <div className="flex  items-center justify-center gap-2  ">
              <span className="  ">
                Connect with us on social media for the latest updates, events,
                and exclusive content.
              </span>
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

            <div>
              <div className="">
                {/* <Button
                  isIconOnly
                  color="default"
                  className="hover:bg-hoverTextColor"
                  aria-label="Like"
                >
                  <span className="socialLink  ">
                    <BsTwitter />
                  </span>
                </Button> */}
                {/* <Button
                  className="hover:bg-hoverTextColor"
                  isIconOnly
                  color="default"
                  aria-label="Like"
                >
                  <span className="socialLink">
                    <BsFacebook />
                  </span>
                </Button> */}
              </div>
            </div>
          </div>
          <div className="mx-auto flex h-full w-1/2 flex-col  items-center  justify-center gap-8">
            <Input type="email" variant="underlined" size="md" label="Email" />
            <Textarea
              key=""
              variant="underlined"
              // label="Description"

              placeholder="Enter your description"
              disableAnimation
              disableAutosize
              size="md"
              classNames={{
                // base: 'max-w-xs',
                input: 'resize-y min-h-[40px]',
              }}
            />
            <Button
              radius="none"
              className="  bg-hoverTextColor text-sm font-semibold uppercase text-white  duration-200 hover:bg-lightText "
            >
              {t('send')}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
