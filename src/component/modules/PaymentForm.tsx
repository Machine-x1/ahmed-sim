/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */

// 'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

import FormattedPrice from './FormattedPrice';

const PaymentForm = () => {
  const router = useRouter();
  const handleCheckout = () => {
    // Your order summary data
    const subtotal = 233;
    const shipping = 20;
    const totalPrice = subtotal + shipping;

    const message = `Order Summary%0ASubtotal: $${subtotal}%0AShipping: $${shipping}%0ATotal Price: $${totalPrice}`;

    const whatsappLink = `https://wa.me/01147871760/?text=${message}`;

    router.push(whatsappLink);
  };
  // const dispatch = useDispatch();
  // const { productStore } = useSelector((state: any) => state?.shopping);
  // const [totalAmt, setTotalAmt] = useState(0);
  // useEffect(() => {
  //   let amt = 0;
  //   productData.map((item: any) => {
  //     amt += item.price * item.quantity;
  //   });
  //   setTotalAmt(amt);
  // }, [productData]);
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
      <h2 className="mb-2 font-semibold uppercase  ">order summary</h2>
      <div className=" border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light  uppercase">Subtotal</p>
          <p>
            <FormattedPrice amount={233} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light uppercase">Shipping</p>
          <p>
            <FormattedPrice amount={20} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light uppercase">Total Price</p>
          <p>
            <FormattedPrice amount={233 + 20} />
          </p>
        </div>
      </div>
      <Button
        onClick={handleCheckout}
        className="mt-4 w-full cursor-pointer bg-mainOrange px-6 py-3 text-slate-100 duration-200 "
      >
        Checkout via WhatsApp
      </Button>
    </div>
  );
};

export default PaymentForm;
