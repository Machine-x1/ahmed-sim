import React from 'react';

const BannerDetails = () => {
  return (
    <div>
      <div className=" text-blue-800" style={{ backgroundColor: '#F6F1EE' }}>
        <div className="mx-auto max-w-7xl p-2 sm:px-6 sm:py-0 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <p className="ml-3 text-center font-medium leading-5 sm:text-left">
                <span className="">
                  <span className="rounded-md bg-rose-400 px-2 text-white">
                    Save
                  </span>
                  upto 20% with the summer coupons
                </span>
              </p>
            </div>
            <div className="order-2 shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                className="m-2 -mr-1 flex rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDetails;
