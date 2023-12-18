/* eslint-disable no-console */
import { Pagination } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

import internalrequestHandler from '@/apps/helpers/InternalrequestHandler';

const PaginationProducts = ({
  meta,
  setProductsData,
}: {
  setProductsData?: any;
  meta: any;
}) => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const fetchProducts = async (page: number) => {
    try {
      // Make an API request to fetch products for the specified page
      const data = await internalrequestHandler(
        'apiProduct',
        'GET',
        {},
        {},
        { page: meta.nextPage, limit: meta.limit }
      );
      // setProducts(response.data.products);
      // setCurrentPage(response.data.products.meta.current_page);
      // setTotalPages(response.data.products.meta.totalPages);
      // setLimit(response.data.products.meta.limit);
      // console.log(response.data.products, 'response');
      console.log(data, 'kjaks');
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    if (currentPage) {
      fetchProducts(currentPage);
      setProductsData(products);
      // Fetch products for the first page
    }
  }, [currentPage]);

  // const handlePageChange = async (page: number) => {
  //   await fetchProducts(page); // Fetch products for the selected page
  // };

  return (
    <div className="flex w-full items-center justify-center py-12">
      <Pagination
        color="primary"
        size="lg"
        showControls
        total={meta.totalPages}
        initialPage={meta.currentPage}
        onChange={fetchProducts}
      />
    </div>
  );
};
export default PaginationProducts;
