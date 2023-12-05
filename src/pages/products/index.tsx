/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { Divider } from '@nextui-org/react';

import { productData } from '@/apps/constants/data';
import BannerProduct from '@/component/modules/BannerProduct';
import CatSection from '@/component/modules/CatSection';
import ContainerBanner from '@/component/modules/ContainerBanner';
import NewProductCard from '@/component/modules/NewProductCard';
import PaginationProducts from '@/component/modules/Pagination';

const ProductsPage = () => {
  return (
    <div className="h-full w-full">
      <ContainerBanner className="w-full">
        <BannerProduct />
      </ContainerBanner>
      <section className="flex w-full ">
        <div className=" mx-auto flex w-full max-w-screen-2xl flex-col py-10 ">
          <div className=" w-full ">
            <CatSection />
          </div>
          <div className="mb-4 flex w-full items-center justify-center  ">
            <h2 className=" flex w-1/2  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
              <Divider className=" mx-auto  w-1/3" />
              New Products
              <Divider className=" mx-auto w-1/3  " />
            </h2>
          </div>

          <div className=" grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productData.map((item: any) => (
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
