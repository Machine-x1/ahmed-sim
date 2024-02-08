/* eslint-disable tailwindcss/no-custom-classname */
const TotalPrice = () => {
  return (
    <div className="text-dark-gray w-full sm:w-[360px]">
      <h3 className="mb-8 text-lg font-semibold">Checkout overview</h3>

      <div className="mb-4 flex items-center justify-between">
        <span>Product1</span>
        <span>KWD. 1,000</span>
      </div>

      <div className="border-light-gray-gray mb-6 flex items-center gap-3 border-y border-solid py-6 text-sm font-semibold">
        {/* <Tag /> */}
        <span className="text-sm font-semibold text-[#006642] underline">
          Have a promo code?
        </span>
      </div>

      <div className="mb-1 flex items-center justify-between font-semibold">
        <span>Total</span>
        <span>KWD. 25,000</span>
      </div>
      <span className="text-primary-gray text-xs underline">
        You will pay in KWD
      </span>

      <div className="mt-6 rounded-xl bg-[#f5f5f5] px-5 py-4 text-sm">
        <span className="mb-1 block font-semibold">Free cancellation</span>
        <span className="text-primary-gray">
          Cancel before 7/11/2023 for a full refund
        </span>
      </div>
    </div>
  );
};
export default TotalPrice;
