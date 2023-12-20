/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-shadow */

import { Button } from '@nextui-org/react';
import { getCookie } from 'cookies-next';
import type { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';
import { JwtGenerator } from '@/apps/helpers/JwtGenerator';
import getProducts from '@/apps/server/products/getProducts';
import AdminNav from '@/component/modules/AdminNav';
import { AdminProductSection } from '@/component/modules/AdminProductSection';
import SearchBar from '@/component/modules/SearchBar';

/* eslint-disable no-underscore-dangle */
const index = ({ products, lang }: any) => {
  const [value, setValue] = useState('All Products');
  const [serverData] = useState(products);
  const [productsData, setProductsData] = useState(serverData);
  const [searchValue, setSearchValue] = useState('');
  // const [metaData, setMetaData] = useState(meta);
  useEffect(() => {
    const getCaggory = async () => {
      if (value !== 'All Products' && value.length > 1) {
        const data = await internalrequestHandler(
          'apiProduct',
          'GET',
          {},
          {},
          { category: value }
        );
        setProductsData(data.data.products); // Add the data to the productsData state
      } else {
        setValue('All Products');
        setProductsData(serverData);
      }
    };

    getCaggory(); // Call the async function
  }, [value]);

  useEffect(() => {
    const getSearch = async () => {
      if (searchValue && searchValue.length >= 2) {
        const data = await internalrequestHandler(
          'apiProduct',
          'GET',
          {},
          {},
          { search: searchValue }
        );
        setProductsData(data.data); // Add the data to the productsData state
      } else {
        setProductsData(serverData);
      }
    };

    getSearch(); // Call the async function
  }, [searchValue]);

  const router = useRouter();
  const categories = [
    { title: 'STEERING WHEELS', key: 'steer-wheels', id: 'steerWheels' },
    { title: 'PEDALS', key: 'paddle', id: 'pedals' },
    { title: 'BUNDLES', key: 'bundles', id: 'bundles' },
    { title: 'WHEEL BASES', key: 'wheel-bases', id: 'wheelBases' },
    { title: 'ACCESSORIES', key: 'accessories', id: 'accessories' },
    { title: 'DIGITAL DASHES', key: 'digital-dashes', id: 'digital-dashes' },
  ];
  return (
    <>
      <AdminNav />
      <div className="mx-auto w-full max-w-[1920px] bg-bodyColor">
        <div className="flex overflow-hidden bg-bodyColor">
          <aside
            id="sidebar"
            className="fixed left-0 top-0 z-20 hidden h-full w-64 shrink-0 flex-col pt-16 duration-75 transition-width lg:flex"
            aria-label="Sidebar"
          >
            <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
              <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
                <div className="flex-1 space-y-1 divide-y bg-white px-3">
                  <ul className="space-y-2 pb-2">
                    <li>
                      <Link href="/admin" className="">
                        <span className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                          <svg
                            className="h-6 w-6 text-gray-500 duration-75 transition group-hover:text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                          </svg>
                          <span className="ml-3">Dashboard</span>
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="admin/"
                        className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                      >
                        <svg
                          className="h-6 w-6 shrink-0 text-gray-500 duration-75 transition group-hover:text-gray-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          Products
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="admin/emails"
                        className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                      >
                        <MdEmail className="h-6 w-6 shrink-0 text-gray-500 duration-75 transition group-hover:text-gray-900" />
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          E-mails
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div
            className="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
            id="sidebarBackdrop"
          />
          <div
            id="main-content"
            className="relative h-full w-full overflow-y-auto bg-gray-50 lg:ml-64"
          >
            <main>
              <div className="">
                <div className="top-0 h-full w-full" />
                <section className="flex w-full ">
                  <div className=" mx-auto flex w-full max-w-screen-xl flex-col gap-4 py-10 ">
                    <div className=" w-full ">
                      <div className=" flex w-full items-center justify-center  gap-4 pb-5  ">
                        <SearchBar setSearchValue={setSearchValue} />
                        <Button
                          onClick={() => router.push('/admin/create')}
                          // fullWidth
                          color="success"
                          variant="flat"
                          className="flex items-center justify-center "
                        >
                          <button type="button" className="  font-medium  ">
                            Add Product
                          </button>
                          <BiAddToQueue size={40} />
                        </Button>
                      </div>
                    </div>
                    {categories.map((category) => (
                      <AdminProductSection
                        key={category.key}
                        id={category.id}
                        setProductsData={setProductsData}
                        lang={lang}
                        title={category.title}
                        productsData={productsData.filter(
                          (d: any) => d.category === category.key
                        )}
                      />
                    ))}
                  </div>
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default index;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = await getProducts();
  const { req, res } = context;
  const getLang = context.locale;
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
    props: {
      products: data.products,
      meta: data.meta,
      lang: getLang,
    },
  };
};
