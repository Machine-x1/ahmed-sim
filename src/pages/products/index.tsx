import { Pagination } from '@nextui-org/react';
import type { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { categories } from '@/apps/constants/categories';
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

  const fetchPag = async () => {
    try {
      const data = await internalrequestHandler(
        'apiProduct',
        'GET',
        {},
        {},
        { page: currentPage.toString(), limit: metaData.limit }
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
      await fetchPag();
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
      <div
        id="products"
        className="mx-auto mt-14 h-full min-h-screen w-full  max-w-[1920px] "
      >
        <div className="h-full w-full">
          <section className="mx-auto flex  max-w-screen-xl flex-col  justify-center gap-4 py-10 ">
            <div className="mx-auto flex w-1/2 items-center justify-center">
              <SearchBar setSearchValue={setSearchValue} />
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
          </section>
          <div className="flex w-full items-center  justify-center pb-12 ">
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
    const data = await getProducts();
    const getLang = context.locale || 'en';

    if (!data || !data.products || !data.meta) {
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
        destination: '/500',
        permanent: false,
      },
    };
  }
};
