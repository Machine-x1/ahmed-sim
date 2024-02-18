/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  Chip,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from '@nextui-org/react';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { FiDelete, FiEye } from 'react-icons/fi';

import AdminLayout from '@/component/modules/AdminAside';
import AdminNav from '@/component/modules/AdminNav';
import Container from '@/component/modules/Container';

import { columns, users } from '../../../apps/constants/dataorder';

export default function index() {
  const renderCell = React.useCallback(
    (user: any, columnKey: string | number) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case 'name':
          return (
            <User description={user.email} name={cellValue}>
              {user.email}
            </User>
          );
        case 'phone':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case 'status':
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {cellValue}
            </Chip>
          );
        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <FiEye />
                </span>
              </Tooltip>
              <Tooltip content="Edit user" onClick={() => console.log('edit')}>
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <BiEdit />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="cursor-pointer text-lg text-danger active:opacity-50">
                  <FiDelete />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const rowsPerPage = 10;
  const page = 1;
  const pages = Math.ceil(20 / rowsPerPage);
  return (
    <div className="h-full w-full">
      <AdminNav />
      <div className="w-1/3">
        <AdminLayout />
      </div>
      <div className=" mx-auto mr-52  w-full pt-10 xl:mx-auto   xl:w-2/3">
        <main>
          <Container className="flex  w-full flex-col py-10 ">
            <h1 className="mb-4 text-3xl font-bold">orders</h1>
            <Table
              aria-label="orders table"
              bottomContent={
                pages > 0 ? (
                  <div className="flex w-full justify-center">
                    <Pagination
                      isCompact
                      showControls
                      showShadow
                      color="primary"
                      page={page}
                      total={pages}
                    />
                  </div>
                ) : null
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
              <TableBody items={users}>
                {(item) => (
                  <TableRow key={item.id}>
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
