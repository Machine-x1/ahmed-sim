/* eslint-disable no-underscore-dangle */
import { Divider } from '@nextui-org/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import type { ProductType } from '@/apps/interface/types';

import NewProductCard from './NewProductCard';

const MemoizedProductCard = React.memo(NewProductCard);

export const ProductSection = ({
  title,
  productsData,
  id,
  lang,
}: {
  id: string;
  title: string;
  productsData: ProductType;
  lang: string;
}) => {
  const { t } = useTranslation('common');

  return (
    <div className=" flex w-full ">
      {productsData.length > 0 && (
        <div className="mx-auto h-full w-full  ">
          <div id={id} className="my-4 flex w-full items-center justify-center">
            <h2 className="flex w-full items-center justify-center text-xl font-bold text-mainOrange dark:text-white md:text-3xl">
              <Divider className="mx-auto w-1/4 md:w-1/3 " />
              {t(title)}
              <Divider className="mx-auto w-1/4 md:w-1/3" />
            </h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-12 px-8 md:grid-cols-3 md:px-0  xl:grid-cols-4">
            {productsData.map((item) => (
              <MemoizedProductCard lang={lang} item={item} key={item._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
