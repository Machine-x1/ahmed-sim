/* eslint-disable no-underscore-dangle */
import { Divider } from '@nextui-org/react';

import type { ProductType } from '@/apps/interface/types';

import NewProductCard from './NewProductCard';

export const ProductSection = ({
  title,
  productsData,
  id,
  lang,
}: {
  id: string | undefined;
  title: string;
  productsData: ProductType;
  lang: any;
}) => {
  return (
    <div className="">
      {productsData.length > 0 ? (
        <div>
          <div id={id} className="my-4 flex w-full items-center justify-center">
            <h2 className="flex w-full items-center justify-center text-3xl font-bold text-mainOrange dark:text-white">
              <Divider className="mx-auto w-1/3" />
              {title}
              <Divider className="mx-auto w-1/3" />
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {productsData.map((item: any) => (
              <NewProductCard lang={lang} key={item._id} item={item} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
