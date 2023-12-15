/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { useEffect, useState } from 'react';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';
import getProducts from '@/apps/server/products/getProducts';
import { Meta } from '@/component/layouts/Meta';
import Categories from '@/component/modules/Categories';
import PaginationProducts from '@/component/modules/Pagination';
import { ProductSection } from '@/component/modules/ProductSection';
import SearchBar from '@/component/modules/SearchBar';
import { Main } from '@/component/templates/Main';
import { Toaster } from 'react-hot-toast';

const ProductsPage = ({ products, meta }: { products: any; meta: any }) => {
  const [value, setValue] = useState('All Products');
  console.log(meta);
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [serverData] = useState(products);
  const [productsData, setProductsData] = useState(serverData);
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue, 'searchValue');
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
        console.log(data.data.products);
      } else {
        setValue('All Products');
        setProductsData(serverData);
      }
      // console.log(data.data.products);
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
        console.log(data);
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
    { title: 'BUNDLES', key: 'Bundles', id: 'Bundles' },
    { title: 'WHEEL BASES', key: 'wheelBasis', id: 'wheelBases' },
    { title: 'ACCESSORIES', key: 'accessories', id: 'accessories' },
    { title: 'DIGITAL DASHES', key: 'DigitalDashes', id: 'DigitalDashes' },
  ];
  // console.log(productsData.filter((d) => d.key === category.key), "asd")

  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <Categories // value={value}
        onClick={(value: string) => setValue(value)}
        onChange={(value: {
          target: { value: React.SetStateAction<string> };
        }) => {
          setValue(value.target.value);
          console.log('hi', value.target.value);
        }}
      />
      <div id="home" className="mx-auto w-full max-w-[1920px] bg-bodyColor ">
        <div className="h-full w-full">
          <div className="top-0 h-full w-full" />
          <section className="flex w-full ">
            <div className=" mx-auto flex w-full max-w-screen-xl flex-col py-10 ">
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
                  title={category.title}
                  productsData={productsData.filter(
                    (d: any) => d.category === category.key
                  )}
                />
              ))}
            </div>
          </section>
          <div className="mt-5 flex w-full justify-center">
            <PaginationProducts />
          </div>
        </div>
        <Toaster />
      </div>
    </Main>
  );
};

export default ProductsPage;

export const getServerSideProps = async (_context: any) => {
  const data = await getProducts();
  return {
    props: {
      products: data.products,
      meta: data.meta,
    },
  };
};
