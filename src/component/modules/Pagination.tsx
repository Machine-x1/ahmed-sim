import { Pagination } from '@nextui-org/react';
import React from 'react';
import toast from 'react-hot-toast';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';

const PaginationProducts = ({
  metaData,
  setMetaData,
  setProductsData,
}: {
  setProductsData?: any;
  setMetaData: any;
  metaData: any;
}) => {
  const fetchProducts = async () => {
    try {
      const data = await internalrequestHandler(
        'apiProduct',
        'GET',
        {},
        {},
        { page: metaData.nextPage, limit: metaData.limit }
      );

      setProductsData(data.data.products);
      setMetaData(data.data.meta);
    } catch (error) {
      // Handle error
      toast.error('An error occurred');
    }
  };

  return (
    <div className="flex w-full items-center justify-center py-12">
      <Pagination
        color="primary"
        size="lg"
        showControls
        total={metaData.totalPages}
        initialPage={1}
        onChange={fetchProducts}
      />
    </div>
  );
};
export default PaginationProducts;
