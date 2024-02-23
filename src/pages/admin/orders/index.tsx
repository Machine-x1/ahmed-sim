/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  User,
} from '@nextui-org/react';
import axios from 'axios';
import type { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react';

import requestHandler from '@/apps/helpers/requestHandler';
import AdminLayout from '@/component/modules/AdminAside';
import AdminNav from '@/component/modules/AdminNav';
import Container from '@/component/modules/Container';

import { columns } from '../../../apps/constants/dataorder';

export default function index({ orders, meta }: { orders: any; meta: any }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersData, setOrdersData] = useState(orders);
  const [metaData, setMetaData] = useState(meta);
  const fetchPag = async (currentPage: any) => {
    try {
      const data = await requestHandler(
        'orders',
        'GET',
        {},
        {},
        { page: currentPage, limit: metaData.limit }
      );

      setOrdersData(data.data.orders);
      setMetaData(data.data.meta);
      return true;
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    const fetchOrders = async () => {
      await fetchPag(currentPage);
    };
    if (currentPage !== 1) {
      fetchOrders();
    } else {
      setOrdersData(orders);
    }
  }, [currentPage]);
  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };
  const renderCell = React.useCallback(
    (order: any, columnKey: string | number) => {
      const cellValue = order[columnKey];
      switch (columnKey) {
        case 'name':
          return (
            <User description={order.email} name={cellValue}>
              {order.email}
            </User>
          );
        case 'phoneNumber':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'addressLine1':
          return (
            <div className="flex flex-col ">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'addressLine2':
          return (
            <div className="flex flex-col ">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'city':
          return (
            <div className="flex flex-col ">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'governorate':
          return (
            <div className="flex flex-col ">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'country':
          return (
            <div className="flex flex-col ">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'postcode':
          return (
            <div className="flex flex-col ">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );

        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="h-full w-full">
      <AdminNav />
      <div className="w-1/3">
        <AdminLayout />
      </div>
      <div className=" mx-auto mr-52  w-full pt-10 xl:mx-auto   xl:w-2/3">
        <main>
          <Container className="flex  w-full flex-col py-10 ">
            <Table
              className="w-full"
              topContent={
                <div className="text-xl font-bold  capitalize"> Orders</div>
              }
              aria-label="orders table"
              bottomContent={
                <div className="flex w-full justify-center">
                  <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="default"
                    // page={metaData.currentPage}
                    total={metaData.totalPages}
                    initialPage={1}
                    onChange={handlePageChange}
                  />
                </div>
              }
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn
                    key={column.uid}
                    align={column.uid === 'actions' ? 'center' : 'start'}
                  >
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={ordersData}>
                {(item: any) => (
                  <TableRow key={item.name}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Container>
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const data = await axios.get(`${process.env.API_EXTRANL}/orders`);
    // console.log(data, 'orders');
    const getLang = context.locale || 'en';

    return {
      props: {
        lang: getLang || 'en',
        orders: data.data.data.orders || [],
        meta: data.data.data.meta,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/500',
        permanent: false,
      },
    };
  }
};
