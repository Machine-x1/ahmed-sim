import Link from 'next/link';
import React from 'react';
import { AiOutlineCustomerService } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

const Adminaside = () => {
  return (
    // <div>
    <div className="mx-auto w-full max-w-[1920px] bg-bodyColor">
      <div className="flex overflow-hidden bg-bodyColor">
        <aside
          id="sidebar"
          className="fixed left-0 top-0 z-20 hidden h-full w-64 shrink-0 flex-col pt-16 duration-75 transition-width xl:flex"
          aria-label="Sidebar"
        >
          <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
            <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
              <div className="flex-1 space-y-1 divide-y bg-white px-3">
                <ul className="space-y-2 pb-2">
                  <li>
                    <Link
                      href="/admin"
                      className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                    >
                      <svg
                        className="h-6 w-6 shrink-0 text-gray-500 duration-75 transition group-hover:text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Products
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="admin"
                      className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                    >
                      <MdEmail className="h-6 w-6 shrink-0 text-gray-500 duration-75 transition group-hover:text-gray-900" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        E-mails
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="admin/orders"
                      className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                    >
                      <AiOutlineCustomerService className="h-6 w-6 shrink-0 text-gray-500 duration-75 transition group-hover:text-gray-900" />
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Orders
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
        <div
          className="fixed inset-0 z-10 hidden bg-gray-900 opacity-50"
          id="sidebarBackdrop"
        />
      </div>
    </div>
    // </div>
  );
};

export default Adminaside;
