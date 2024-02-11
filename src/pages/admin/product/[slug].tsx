/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from 'axios';
import { useFormik } from 'formik';
import type { GetServerSidePropsContext } from 'next';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import * as Yup from 'yup';

import { Meta } from '@/component/layouts/Meta';
import { Main } from '@/component/templates/Main';

const UpdateProduct = ({ product }: { product: any }) => {
  const [loading, setloading] = useState(false);
  const getChangedValues = (values: any, initialValues: any) => {
    return Object.entries(values).reduce((acc: any, [key, value]) => {
      const hasChanged = initialValues[key] !== value;

      if (hasChanged) {
        acc[key] = value;
      }

      return acc;
    }, {});
  };

  const formik: any = useFormik({
    initialValues: {
      name: { en: product.name.en, ar: product.name.ar },
      description: { en: product.description.en, ar: product.description.en },
      price: product.price,
      quantity: product.quantity,
      category: product.category,
      status: product.status,
      oldPrice: product.old_price,
    },
    validationSchema: Yup.object({
      name: Yup.object().shape({
        en: Yup.string().required('English name is required'),
        ar: Yup.string().required('Arabic name is required'),
      }),
      description: Yup.object().shape({
        en: Yup.string().required('English description is required'),
        ar: Yup.string().required('Arabic description is required'),
      }),
      price: Yup.number().required('Price is required'),
      oldPrice: Yup.number(),
      quantity: Yup.number(),
      images: Yup.array().of(Yup.string()),
      category: Yup.string().oneOf([
        'paddle',
        'steer-wheels',
        'accessories',
        'bundles',
        'wheel-bases',
        'digital-dashes',
        'cockpits',
      ]),
      status: Yup.string().oneOf(['in-stock', 'out-of-stock', 'pre-order']),
    }),
    onSubmit: async (values: any) => {
      setloading(true);
      const sendThis = getChangedValues(values, product);

      try {
        // const formData = {};
        const response = await axios.put(
          `http://localhost:3000/api/admin/product/${product.slug}`,
          sendThis
        );

        if (response.status === 200) {
          setloading(false);
          toast.success('Done');
        } else {
          setloading(false);
          // Handle errors, e.g., show an error message
        }
      } catch (error) {
        toast.error('An error occurred');
        // Handle errors, e.g., show an error message
      }
    },
  });

  return (
    <Main meta={<Meta />}>
      <div className="relative mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-auto lg:py-4">
        {loading ? (
          <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black/70">
            <div className="text-white">Loading</div>
          </div>
        ) : null}
        <Toaster />
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-xl md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Add a Product
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="name.en"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  English Name
                </label>
                <input
                  type="text"
                  id="name.en"
                  name="name.en"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name.en}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="English Name"
                />
                {formik.touched.name?.en && formik.errors.name?.en && (
                  <div className="text-sm text-red-500">
                    {formik.errors.name.en}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="name.ar"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Arabic Name
                </label>
                <input
                  type="text"
                  id="name.ar"
                  name="name.ar"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name.ar}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="Arabic Name"
                />
                {formik.touched.name?.ar && formik.errors.name?.ar && (
                  <div className="text-sm text-red-500">
                    {formik.errors.name.ar}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="description.en"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  English Description
                </label>
                <input
                  type="text"
                  id="description.en"
                  name="description.en"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description.en}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="English Description"
                />
                {formik.touched.description?.en &&
                  formik.errors.description?.en && (
                    <div className="text-sm text-red-500">
                      {formik.errors.description.en}
                    </div>
                  )}
              </div>

              <div>
                <label
                  htmlFor="description.ar"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Arabic Description
                </label>
                <input
                  type="text"
                  id="description.ar"
                  name="description.ar"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description.ar}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="Arabic Description"
                />
                {formik.touched.description?.ar &&
                  formik.errors.description?.ar && (
                    <div className="text-sm text-red-500">
                      {formik.errors.description.ar}
                    </div>
                  )}
              </div>

              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="Price"
                />
                {formik.touched.price && formik.errors.price && (
                  <div className="text-sm text-red-500">
                    {formik.errors.price}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Old Price
                </label>
                <input
                  type="number"
                  id="oldPrice"
                  name="oldPrice"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.oldPrice}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="oldPrice"
                />
                {formik.touched.oldPrice && formik.errors.oldPrice && (
                  <div className="text-sm text-red-500">
                    {formik.errors.oldPrice}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.quantity}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  placeholder="Quantity"
                />
                {formik.touched.quantity && formik.errors.quantity && (
                  <div className="text-sm text-red-500">
                    {formik.errors.quantity}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                >
                  <option value="paddle">Paddle</option>
                  <option value="steer-wheels">Steer Wheels</option>
                  <option value="accessories">Accessories</option>
                  <option value="bundles">Bundles</option>
                  <option value="wheel-bases">Wheel Bases</option>
                  <option value="digital-dashes">Digital Dashes</option>
                  <option value="cockpits">Cockpits</option>
                </select>
                {formik.touched.category && formik.errors.category && (
                  <div className="text-sm text-red-500">
                    {formik.errors.category}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.status}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                >
                  <option value="in-stock">in stock</option>
                  <option value="out-of-stock">out of stock</option>
                  <option value="pre-order">pre order</option>
                </select>
                {formik.touched.status && formik.errors.status && (
                  <div className="text-sm text-red-500">
                    {formik.errors.status}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </Main>
  );
};

export default UpdateProduct;
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context.query;
  const res = await fetch(`${process.env.API_EXTRANL}/products/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const product = await res.json();
  return {
    props: {
      product: product.data.product,
    },
  };
}
