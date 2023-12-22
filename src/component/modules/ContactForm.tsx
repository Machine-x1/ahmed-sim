/* eslint-disable no-console */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/no-unescaped-entities */
import { Button, Divider, Input, Link, Textarea } from '@nextui-org/react';
import useTranslation from 'next-translate/useTranslation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiHome } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import { MdWhatsapp } from 'react-icons/md';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';

import Container from './Container';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !description) {
      // Display a toast message indicating the fields are required
      toast.error('Email and description are required fields.');
      return; // Stop further execution
    }
    try {
      await internalrequestHandler('apiContact', 'POST', {
        email,
        description,
      });
      // setSuccessMessage('Email sent successfully!');
      toast.success('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      // setErrorMessage('Error sending email. Please try again.');
      toast.error('Error sending email. Please try again.');
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
            <p className=" flex items-center justify-center gap-2 md:justify-start">
              <BiHome size={30} color="#6a6a6a" />
              Lulu Mall, Salem Al Mubarak Street 30 Ln, Salmiya, Kuwait
            </p>
            <div className="flex w-full gap-6">
              <p className="flex items-center justify-center gap-2 md:justify-start ">
                <MdWhatsapp size={30} color="#25D366" /> + 965 6939 9851
              </p>
              <p className="flex items-center justify-center gap-2 md:justify-start ">
                <Link
                  href="https://www.instagram.com/the_simracingcorner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="follow us in social media"
                  className=" "
                >
                  <FiInstagram
                    size={30}
                    aria-label="follow us in social media"
                    className="hover:text-hoverTextColor "
                    color="#E1306C"
                  />
                </Link>
              </p>
            </div>

            <div />
          </div>
          <div className="mx-auto flex h-full w-1/2 flex-col   items-center  justify-center gap-4">
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                variant="underlined"
                size="lg"
                required
                // label="Email"
                placeholder={t('enter-email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Textarea
                key=""
                variant="underlined"
                placeholder={t('enter-message')}
                disableAnimation
                disableAutosize
                size="lg"
                required
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
