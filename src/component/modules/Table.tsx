/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import type { FC } from 'react';
import React from 'react';
import {
  FaEdit,
  FaEye,
  FaSortDown,
  FaSortUp,
  FaTrashAlt,
} from 'react-icons/fa';
import {
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';

interface IData {
  id: number;
  [key: string]: any;
}

interface IColumn {
  Header: string;
  accessor: string;
  Cell?: any;
}

interface IDynamicTableProps {
  data: IData[];
  columns: IColumn[];
  onView: (id: number) => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const DynamicTable: FC<IDynamicTableProps> = ({
  data,
  columns,
  onView,
  onEdit,
  onDelete,
}) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [{ id: columns[0].accessor, desc: false }],
      },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = tableInstance;

  const { globalFilter } = state;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || undefined;
    setGlobalFilter(value);
  };

  const handleRowClick = (row: any) => {
    console.log('Row data:', row.original);
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg py-2 pl-10 pr-3 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={globalFilter || ''}
            onChange={handleFilterChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center justify-center pl-3">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.5 10.5a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
        </div>
        {selectedFlatRows.length > 0 && (
          <div className="text-sm font-medium text-gray-500">
            {selectedFlatRows.length} selected
          </div>
        )}
      </div>
      <table {...getTableProps()} className="w-full table-auto">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup, key) => (
            <tr key={key} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key) => (
                <th
                  key={key}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="cursor-pointer px-4 py-2 font-medium uppercase tracking-wider text-gray-600"
                >
                  {column.render('Header')}
                  <span className="ml-1">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaSortDown className="inline h-4 w-4 text-gray-400" />
                      ) : (
                        <FaSortUp className="inline h-4 w-4 text-gray-400" />
                      )
                    ) : null}
                  </span>
                </th>
              ))}
              <th className="px-4 py-2 font-medium uppercase tracking-wider text-gray-600">
                Actions
              </th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <tr
                key={key}
                {...row.getRowProps()}
                className={`${
                  row.isSelected ? 'bg-blue-50' : ''
                } cursor-pointer hover:bg-gray-50`}
                onClick={() => handleRowClick(row)}
              >
                {row.cells.map((cell, key) => (
                  <td key={key} {...cell.getCellProps()} className="px-4 py-3">
                    {cell.render('Cell')}
                  </td>
                ))}
                <td className="flex space-x-2 px-4 py-3">
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => onView(row.original.id)}
                  >
                    <FaEye />
                  </button>
                  <button
                    type="button"
                    className="text-yellow-500 hover:text-yellow-700"
                    onClick={() => onEdit(row.original.id)}
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDelete(row.original.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DynamicTable;
