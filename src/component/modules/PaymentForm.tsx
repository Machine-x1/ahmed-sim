/* eslint-disable import/extensions */
/* eslint-disable react/no-danger */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@nextui-org/react';
import { useState } from 'react';

const PaymentForm = () => {
  const [paymentResponse, setPaymentResponse] = useState(null);

  const handleFormSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const formData = {
      amount: 100,
      trackid: 'Aa123',
      reference: 'abc',
    };

    // Send data to your server
    const response = await fetch('/api/cbkPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    setPaymentResponse(responseData);
  };

  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
      <form onSubmit={handleFormSubmit}>
        <Button
          type="submit"
          className="mt-4 w-full cursor-pointer bg-mainOrange px-6 py-3 text-slate-100 duration-200 "
        >
          Checkout
        </Button>
      </form>
      {paymentResponse && (
        <div
          dangerouslySetInnerHTML={{
            __html: (paymentResponse as { form: string }).form,
          }}
        />
      )}
    </div>
  );
};

export default PaymentForm;
