/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { Divider } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';
import getProducts from '@/apps/server/products/getProducts';
import { Meta } from '@/component/layouts/Meta';
import Categories from '@/component/modules/Categories';
import NewProductCard from '@/component/modules/NewProductCard';
import PaginationProducts from '@/component/modules/Pagination';
import SearchBar from '@/component/modules/SearchBar';
import SelectCat from '@/component/modules/SelectCat';
import { Main } from '@/component/templates/Main';

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
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <Categories />
      <div id="home" className="mx-auto w-full max-w-[1920px] ">
        <div className="h-full w-full">
          {/* <div className="mx-auto w-full max-w-screen-xl   px-4 py-10 xl:px-0 ">
            <Categories />
          </div> */}

          <div className="top-0 h-full w-full" />
          <section className="flex w-full ">
            <div className=" mx-auto flex w-full max-w-screen-xl flex-col py-10 ">
              <div className=" w-full ">
                <div className=" flex w-full justify-between gap-2 pb-5  ">
                  <div className="w-1/2">
                    <SearchBar setSearchValue={setSearchValue} />
                  </div>
                  <div className="   w-1/3 ">
                    <SelectCat
                      // value={value}
                      onChange={(value: {
                        target: { value: React.SetStateAction<string> };
                      }) => {
                        setValue(value.target.value);
                        console.log('hi', value.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4 flex w-full items-center justify-center  ">
                <h2 className=" flex w-11/12  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
                  <Divider className=" mx-auto  w-1/3" />
                  {value}

                  <Divider className=" mx-auto w-1/3  " />
                </h2>
              </div>

              <div className=" grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {productsData.length > 0 ? (
                  productsData.map((item: any) => (
                    <NewProductCard key={item._id} item={item} />
                  ))
                ) : (
                  <div>No Data For Now</div>
                )}
              </div>
            </div>
          </section>
          <div className="mt-5 flex w-full justify-center">
            <PaginationProducts />
          </div>
        </div>
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
