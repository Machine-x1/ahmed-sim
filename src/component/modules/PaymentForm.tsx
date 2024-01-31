/* eslint-disable import/extensions */
/* eslint-disable react/no-danger */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
// import { Button } from '@nextui-org/react';
// import { useState } from 'react';

// import { Button } from '@nextui-org/react';
// import { useState } from 'react';

// const PaymentForm = () => {
//   const [paymentResponse, setPaymentResponse] = useState(null);

//   const handleFormSubmit = async (event: { preventDefault: () => void }) => {
//     event.preventDefault();

//     const formData = {
//       amount: 100,
//       trackid: 'Aa123',
//       reference: 'abc',
//     };

//     // Send data to your server
//     const response = await fetch('/api/cbkPayment', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'cache-control': 'no-cache',
//       },
//       body: JSON.stringify(formData),
//     });

//     const responseData = await response.json();
//     setPaymentResponse(responseData);
//   };

//   return (
//     <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
//       <form onSubmit={handleFormSubmit}>
//         <Button
//           type="submit"
//           className="mt-4 w-full cursor-pointer bg-mainOrange px-6 py-3 text-slate-100 duration-200 "
//         >
//           Checkout
//         </Button>
//       </form>
//       {paymentResponse && (
//         <div
//           dangerouslySetInnerHTML={{
//             __html: (paymentResponse as { form: string }).form,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default PaymentForm;

/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable array-callback-return */

// 'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { useSelector } from 'react-redux';

import type { RootState } from '@/apps/redux/store';

import FormattedPrice from './FormattedPrice';

const PaymentForm = () => {
  const router = useRouter();
  const { t } = useTranslation('cart');
  const { cart } = useSelector((state: RootState) => state.cart);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cart.products) {
      totalPrice += product.price * product.purchased_quantity;
    }
    return totalPrice;
  };
  const total = calculateTotalPrice();
  // console.log(cart.products.map((product: any) => product.name.en));

  const handleCheckout = () => {
    // make a whatsapp message with the products and total price
    const totalPrice = total.toFixed(2);
    const purchasedProducts = cart.products.map(
      (product: any) => `${product.name.en} x ${product.purchased_quantity}`
    ); // Add product name and quantity

    const message = `Order Summary \n Total Price: $${totalPrice} \nProducts: ${purchasedProducts}`;
    const phoneNumber = '+96569399851';

    const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(
      message
    )}`;

    // const whatsappLink = `https://wa.me/${phoneNumber}/?text=${message}`;
    router.push(whatsappLink);
  };
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
      <h2 className="mb-2 font-semibold uppercase  ">{t('order-summary')}</h2>
      <div className=" border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light  uppercase">{t('subtotal')}</p>
          <p>
            <FormattedPrice amount={total} />
          </p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light ">{t('shipping')}</p>
        </div>
      </div>
      <div className="border-b-[1px] border-b-slate-300 py-2">
        <div className="mb-2 flex max-w-lg items-center justify-between">
          <p className="font-light uppercase">{t('total-price')}</p>
          <p>
            <FormattedPrice amount={total} />
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
