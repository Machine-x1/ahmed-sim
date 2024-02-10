import { Button, Divider, Input, Link, Textarea } from '@nextui-org/react';
import { useFormik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import toast from 'react-hot-toast';
import { BiHome } from 'react-icons/bi';
import { FiInstagram } from 'react-icons/fi';
import { MdWhatsapp } from 'react-icons/md';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';

import { ContactValidationSchema } from '../elements/Form/ContactValidationSchema';
import Container from './Container';

const ContactForm = () => {
  const { t } = useTranslation('common');
  const formik = useFormik({
    initialValues: {
      email: '',
      description: '',
    },

    validationSchema: ContactValidationSchema,
    onSubmit: async (values) => {
      try {
        await internalrequestHandler('apiContact', 'POST', values);
        toast.success('Email sent successfully!');
      } catch (error) {
        toast.error('Error sending email. Please try again.');
      }
    },
  });

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
            <form onSubmit={formik.handleSubmit}>
              <Input
                type="email"
                variant="underlined"
                size="lg"
                required
                placeholder={t('enter-email')}
                onChange={formik.handleChange}
                value={formik.values.email}
                name="email"
              />
              <Textarea
                key=""
                variant="underlined"
                placeholder={t('enter-message')}
                disableAnimation
                disableAutosize
                size="lg"
                required
                onChange={formik.handleChange}
                value={formik.values.description}
                name="description"
                classNames={{
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

export default React.memo(ContactForm);
