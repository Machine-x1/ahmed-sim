/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unescaped-entities */
import { Button, Divider, Input, Link, Textarea } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import { BsInstagram } from 'react-icons/bs';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';

import Container from './Container';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await internalrequestHandler('apiContact', 'POST', {
        email,
        description,
      });
      setSuccessMessage('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setErrorMessage('Error sending email. Please try again.');
    }
  };
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
              <Link
                href="https://www.instagram.com/the_simracingcorner/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="follow us in social media"
              >
                <Button
                  className="hover:bg-hoverTextColor"
                  isIconOnly
                  color="default"
                  aria-label="instagram"
                >
                  <span className="socialLink">
                    <BsInstagram />
                  </span>
                </Button>
              </Link>
            </div>

            <div />
          </div>
          <div className="mx-auto flex h-full w-1/2 flex-col   items-center  justify-center gap-4">
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                variant="underlined"
                size="md"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                key=""
                variant="underlined"
                placeholder="Enter your description"
                disableAnimation
                disableAutosize
                size="md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                classNames={{
                  // base: 'max-w-xs',
                  input:
                    'resize-y min-h-[40px] text-base outline-none  max-w-xs w-full  ',
                }}
              />
              <div className="mt-4 flex justify-center">
                <Button
                  type="submit"
                  size="sm"
                  radius="none"
                  className="  bg-hoverTextColor text-sm font-semibold uppercase text-white  duration-200 hover:bg-lightText "
                >
                  {t('send')}
                </Button>
              </div>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
