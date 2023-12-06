/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { Divider } from '@nextui-org/react';
import { useState } from 'react';

import getProducts from '@/apps/server/products/getProducts';
import NewProductCard from '@/component/modules/NewProductCard';
import PaginationProducts from '@/component/modules/Pagination';
import SearchBar from '@/component/modules/SearchBar';
import SelectCat from '@/component/modules/SelectCat';

const ProductsPage = ({ products, meta }: { products: any; meta: any }) => {
  const [value, setValue] = useState('steer-wheels');

  return (
    <div className="h-full w-full">
      {/* <ContainerBanner className="w-full">
        <BannerProduct />
      </ContainerBanner> */}
      <div className="top-0 h-full w-full" />
      <section className="flex w-full ">
        <div className=" mx-auto flex w-full max-w-screen-xl flex-col py-10 ">
          <div className=" w-full ">
            <div className=" flex  w-full gap-2 py-10">
              {/* <h2 className=" flex w-full  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
                  {value}
                </h2> */}
              <SearchBar />
              <div className="   flex w-full items-center justify-center  ">
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

          <div className=" grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {products.map((item: any) => (
              <NewProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <div className="mt-5 flex w-full justify-center">
        <PaginationProducts />
      </div>
    </div>
  );
};

export default ProductsPage;

export const getServerSideProps = async (context: any) => {
  const data = await getProducts();
  return {
    props: {
      products: data.products,
      meta: data.meta,
    },
  };
};
