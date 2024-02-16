/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import { BiCalendar } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';

const CheckoutSummary = ({ values }: { values: any }) => {
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // Example usage:
  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();
  return (
    <div className="text-dark-gray border-light-gray max-w-[360px] border-b border-solid font-semibold">
      <div className="mb-3 w-full">
        <Image
          className="w-full rounded-xl    "
          src="/images/logo.svg"
          alt="logo"
          width={100}
          quality={100}
          height={100}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) and (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Building Number | Street Number/Name | Apartment Number
City Name, State Abbreviation | Zip Code */}

      <h3 className="text-lg">{values?.fullName} </h3>

      <div className="my-6 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          {`${values?.shippingAddress} / ${values?.city} / ${values?.postcode}`}
        </div>
        <div className="flex items-center gap-4">
          <span>{values?.email}</span>
          <span>{values?.phoneNo}</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Order Date</span>
          <div className="flex items-center gap-2">
            <BiCalendar />
            <span>{currentDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock />
            <span>{currentTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckoutSummary;
