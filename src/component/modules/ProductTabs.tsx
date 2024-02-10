import { Tab, Tabs } from '@nextui-org/react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductTabs = ({ product, lang }: { product: any; lang: string }) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex w-full  flex-col">
      <Tabs
        aria-label="Options"
        variant="underlined"
        classNames={{
          tabList:
            'gap-6 w-full  relative rounded-none p-0 border-b border-divider  text-md font-medium text-gray-900 hover:text-gray-8',

          cursor: 'w-full',
          tab: 'max-w-fit px-0  h-12',
          tabContent: 'group-data-[selected=true]:text-lightText',
        }}
      >
        <Tab
          key="Description"
          title={
            <div className="flex w-full items-center space-x-2">
              <span className="font-medium text-gray-900  hover:text-gray-800">
                {t('product-details')}
              </span>
            </div>
          }
        >
          <div className="flow-root ">
            <p className="text-lightText">{product?.description[lang]}</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
