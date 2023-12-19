/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Admincard from './AdminCard';

/* eslint-disable no-console */
const Admintable = ({ products }: { products: any }) => {
  return (
    <div className="flex w-full py-4 ">
      <div className="grid w-full grid-cols-1 gap-12 px-8 md:grid-cols-3 md:px-0  xl:grid-cols-4">
        {products.map((item: any) => (
          <Admincard lang="en" key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Admintable;
