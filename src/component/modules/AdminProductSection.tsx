/* eslint-disable no-underscore-dangle */
import { Divider } from '@nextui-org/react';

import type { ProductType } from '@/apps/interface/types';

import Admincard from './AdminCard';

export const AdminProductSection = ({
  title,
  productsData,
  id,
  lang,
  setProductsData,
}: {
  id: string | undefined;
  title: string;
  productsData: ProductType;
  lang: any;
  setProductsData: any;
}) => {
  return (
    <div className="flex w-full py-4 ">
      {productsData.length > 0 ? (
        <div>
          <div id={id} className="my-4 flex w-full items-center justify-center">
            <h2 className="flex w-full items-center justify-center text-3xl font-bold text-mainOrange dark:text-white">
              <Divider className="mx-auto w-1/4 md:w-1/3 " />
              {title}
              <Divider className="mx-auto w-1/4 md:w-1/3" />
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-12 px-8 md:grid-cols-3 md:px-0  xl:grid-cols-4">
            {productsData.map((item: any) => (
              <Admincard
                setProductsData={setProductsData}
                lang={lang}
                key={item._id}
                item={item}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};
