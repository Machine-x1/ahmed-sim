/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-underscore-dangle */

import { getProducts } from '@/apps/helpers';
import BannerProduct from '@/component/modules/BannerProduct';
import CatSection from '@/component/modules/CatSection';
import ContainerBanner from '@/component/modules/ContainerBanner';
import NewProductCard from '@/component/modules/NewProductCard';

const SteerWheelsPage = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string | undefined;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  console.log(query);
  // const cPage = Number(searchParams?.page) || 1;
  // const totalPages = await getTotalPages(2);
  const products = await getProducts();
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
          <div className=" grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item: any) => (
              <NewProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <div className="mt-5 flex w-full justify-center">
        {/* <PaginationProducts totalPages={2} /> */}
      </div>
    </div>
  );
};

export default SteerWheelsPage;
