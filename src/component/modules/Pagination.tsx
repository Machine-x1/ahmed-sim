/* eslint-disable no-console */
import { Pagination } from '@nextui-org/react';
import React from 'react';

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
  console.log(metaData, 'xzxzx1zx');
  const fetchProducts = async () => {
    try {
      // Make an API request to fetch products for the specified page
      const data = await internalrequestHandler(
        'apiProduct',
        'GET',
        {},
        {},
        { page: metaData.nextPage, limit: metaData.limit }
      );
      // setProducts(response.data.products);
      // setCurrentPage(response.data.products.meta.current_page);
      // setTotalPages(response.data.products.meta.totalPages);
      // setLimit(response.data.products.meta.limit);
      // console.log(response.data.products, 'response');
      console.log(data.data, 'xzxzxzx');
      setProductsData(data.data.products);
      setMetaData(data.data.meta);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // const handlePageChange = async (page: number) => {
  //   await fetchProducts(page); // Fetch products for the selected page
  // };

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
