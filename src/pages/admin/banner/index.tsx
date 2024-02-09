/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useFormik } from 'formik';
import type { GetServerSidePropsContext } from 'next';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';

import { JwtGenerator } from '@/apps/helpers/JwtGenerator';
import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';

const BannerUpdate = () => {
  const [loading, setloading] = useState(false);
  const formik: any = useFormik({
    initialValues: {
      images: [''],
      title: '',
      content: '',
    },
    validationSchema: Yup.object({
      images: Yup.array().of(Yup.string()),
    }),
    onSubmit: async (values: any) => {
      setloading(true);
      try {
        const formData = new FormData();

        // Append images to the FormData
        values.images.forEach((image: any) => {
          formData.append('files', image);
        });
        // Make the API request with axios
        const response = await axios.post(
          'http://localhost:3000/api/admin/settings',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Check the response status and handle it accordingly
        // console.log(response.status);
        if (response.status === 200) {
          setloading(false);
          toast.success('Done');
        } else {
          setloading(false);
          console.error('API request failed:', response.statusText);
          // Handle errors, e.g., show an error message
        }
      } catch (error) {
        console.error('Error during API request:', error);
        // Handle errors, e.g., show an error message
      }
    },
  });

  const handleImageChange = (index: any, files: any) => {
    const updatedImages = [...formik.values.images];
    updatedImages[index] = files[0];
    formik.setFieldValue(`images-${index}`, files[0]);
    formik.setFieldValue('images', updatedImages);
  };

  const removeImageInput = (index: any) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  return (
    <Main meta={<Meta />}>
      <div className=" relative mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 md:h-auto lg:py-4">
        {loading ? (
          <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70">
            <div className="text-white">Loading</div>
          </div>
        ) : null}
        <Toaster />
        <div className="h-[80vh] w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-xl md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Upload Main Banner
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="images"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Images
                </label>
                {formik.values.images.map((_: any, index: any) => (
                  <div key={index} className="mb-2 flex items-center space-x-2">
                    <input
                      type="file"
                      id={`images-${index}`}
                      name={`images-${index}`}
                      onChange={(e) => handleImageChange(index, e.target.files)}
                      onBlur={formik.handleBlur}
                      className="block flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                    />
                    {index > 4 && (
                      <button
                        type="button"
                        onClick={() => removeImageInput(index)}
                        className="font-medium text-red-500 focus:outline-none"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}

                {formik.touched.images && formik.errors.images && (
                  <div className="text-sm text-red-500">
                    {formik.errors.images}
                  </div>
                )}

                <div className="mb-2 flex items-center space-x-2">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    onChange={(e) =>
                      formik.setFieldValue(`title`, e.target.value)
                    }
                    className="block flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  />
                  <input
                    type="text"
                    id="content"
                    placeholder="content"
                    name="content"
                    onChange={(e) =>
                      formik.setFieldValue(`content`, e.target.value)
                    }
                    className="block flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update Main Banner
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </Main>
  );
};

export default BannerUpdate;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req, res } = context;
  const token = getCookie('ad_token', { req, res });
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  const jwt = new JwtGenerator();
  const jwtVerify = jwt.jwtTokenVerify(token);
  if (jwtVerify.verified.user !== 'admin') {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
      props: {},
    };
  }
  return {
    props: {},
  };
};
