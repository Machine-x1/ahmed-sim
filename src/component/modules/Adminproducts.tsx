/* eslint-disable react-hooks/rules-of-hooks */
import { Button } from '@nextui-org/react';
import type { GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import { BiAddToQueue } from 'react-icons/bi';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';
import getProducts from '@/apps/server/products/getProducts';
import { AdminProductSection } from '@/component/modules/AdminProductSection';
import Container from '@/component/modules/Container';
import SearchBar from '@/component/modules/SearchBar';

const Adminproducts = ({ products, lang }: any) => {
  console.log(products, 'products');
  const [value, setValue] = useState('All Products');
  // eslint-disable-next-line @typescript-eslint/naming-convention
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

  const categories = [
    { title: 'STEERING WHEELS', key: 'steer-wheels', id: 'steerWheels' },
    { title: 'PEDALS', key: 'paddle', id: 'pedals' },
    { title: 'BUNDLES', key: 'bundles', id: 'bundles' },
    { title: 'WHEEL BASES', key: 'wheel-bases', id: 'wheelBases' },
    { title: 'ACCESSORIES', key: 'accessories', id: 'accessories' },
    { title: 'DIGITAL DASHES', key: 'digital-dashes', id: 'digital-dashes' },
  ];
  return (
    <Container className="w-full  ">
      <div className="">
        <div className="top-0 h-full w-full" />
        <section className="flex w-full ">
          <div className=" mx-auto flex w-full max-w-screen-xl flex-col gap-4 py-10 ">
            <div className=" w-full ">
              <div className=" flex w-full items-center justify-center  gap-4 pb-5  ">
                {/* <div className="flex w-full items-center justify-center "> */}
                <SearchBar setSearchValue={setSearchValue} />
                <Button
                  onClick={() => setValue('All Products')}
                  fullWidth
                  color="success"
                  variant="flat"
                  className="flex items-center justify-center "
                >
                  <span className=" text-lg font-medium  ">Add Product </span>
                  <BiAddToQueue size={50} />
                </Button>
                {/* </div> */}
              </div>
            </div>
            {categories.map((category) => (
              <AdminProductSection
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
        {/* <div className="mt-5 flex w-full justify-center">
         <PaginationProducts
           metaData={metaData}
           setMetaData={setMetaData}
           setProductsData={setProductsData}
         />
       </div> */}
      </div>
    </Container>
  );
};

export default Adminproducts;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = await getProducts();
  const getLang = context.locale;

  return {
    props: {
      products: data.products,
      meta: data.meta,
      lang: getLang,
    },
  };
};
