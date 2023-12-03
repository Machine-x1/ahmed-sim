import { Pagination } from '@nextui-org/react';
import React from 'react';

const PaginationProducts = () => {
  return (
    <div className="flex w-full items-center justify-center py-12">
      <Pagination
        color="primary"
        size="lg"
        showControls
        total={10}
        initialPage={1}
      />
    </div>
  );
};
export default PaginationProducts;
