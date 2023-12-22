/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { Pagination } from '@nextui-org/react';
import type { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';
import getProducts from '@/apps/server/products/getProducts';
import { Meta } from '@/component/layouts/Meta';
import { ProductSection } from '@/component/modules/ProductSection';
import SearchBar from '@/component/modules/SearchBar';
import { Main } from '@/component/templates/Main';

const ProductsPage = ({
  products,
  meta,
  lang,
}: {
  products: any;
  meta: any;
  lang: any;
}) => {
  const [value, setValue] = useState('All Products');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [serverData] = useState(products);
  const [productsData, setProductsData] = useState(serverData);
  const [searchValue, setSearchValue] = useState('');
  const [metaData, setMetaData] = useState(meta);
  const [currentPage, setCurrentPage] = useState(1);

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

  const categories = [
    { title: 'STEERING WHEELS', key: 'steer-wheels', id: 'steerWheels' },
    { title: 'PEDALS', key: 'paddle', id: 'pedals' },
    { title: 'BUNDLES', key: 'bundles', id: 'Bundles' },
    { title: 'WHEEL BASES', key: 'wheel-bases', id: 'wheelBases' },
    { title: 'ACCESSORIES', key: 'accessories', id: 'accessories' },
    { title: 'DIGITAL DASHES', key: 'digital-dashes', id: 'DigitalDashes' },
  ];

  const fetchPag = async (currentPage: any) => {
    try {
      const data = await internalrequestHandler(
        'apiProduct',
        'GET',
        {},
        {},
        { page: currentPage, limit: metaData.limit }
      );
      setProductsData(data.data.products);
      setMetaData(data.data.meta);
      return true;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      await fetchPag(currentPage);
    };
    if (currentPage !== 1) {
      fetchProducts();
    } else {
      setProductsData(serverData);
    }
  }, [currentPage]);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  return (
    <Main meta={<Meta />}>
      {/* <Categories // value={value}
        onClick={(value: string) => setValue(value)}
        onChange={(value: {
          target: { value: React.SetStateAction<string> };
        }) => {
          setValue(value.target.value);
        }}
      /> */}
      <div id="products" className="mx-auto mt-14 w-full max-w-[1920px] ">
        <div className="h-full w-full">
          <div className=" h-full w-full" />
          <section className="flex w-full ">
            <div className=" mx-auto flex w-full max-w-screen-xl flex-col gap-4 py-10 ">
              <div className=" w-full ">
                <div className=" flex w-full justify-between gap-2 pb-5  ">
                  <div className="w-full">
                    <SearchBar setSearchValue={setSearchValue} />
                  </div>
                </div>
              </div>
              {categories.map((category) => (
                <ProductSection
                  key={category.key}
                  id={category.id}
                  lang={lang}
                  title={category.title}
                  productsData={productsData.filter(
                    (d: any) => d.category === category.key
                  )}
                />
              ))}
            </div>
          </section>
          <div className="flex w-full items-center justify-center py-12">
            <Pagination
              color="primary"
              size="lg"
              showControls
              total={metaData.totalPages}
              initialPage={1}
              onChange={handlePageChange}
            />
          </div>
        </div>
        <Toaster />
      </div>
    </Main>
  );
};

export default ProductsPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const data = await getProducts(); // Assuming getProducts() retrieves data from the API
    const getLang = context.locale || 'en'; // Set 'en' as default language if not provided

    if (!data || !data.products || !data.meta) {
      // Throw an error if data is missing or in an unexpected format
      throw new Error('Data from API is missing or in an unexpected format');
    }

    return {
      props: {
        products: data.products,
        meta: data.meta,
        lang: getLang || 'en',
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/500', // Redirect to a custom 500 error page
        permanent: false,
      },
    };
  }
};
