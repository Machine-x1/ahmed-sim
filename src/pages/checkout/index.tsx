/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-nested-ternary */
import { useDisclosure } from '@nextui-org/react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { BiShield } from 'react-icons/bi';
import { useSelector } from 'react-redux';

import type { RootState } from '@/apps/redux/store';
import { Meta } from '@/component/layouts/Meta';
import CheckoutSummary from '@/component/modules/CheckoutSummary';
import Container from '@/component/modules/Container';
import FailedModal from '@/component/modules/FailedModal';
import Heading from '@/component/modules/Heading';
import InputField from '@/component/modules/InputField';
import ModalPop from '@/component/modules/SuccefulModalPop';
import TotalPrice from '@/component/modules/TotalPrice';
import { Main } from '@/component/templates/Main';

import { validationSchema } from '../../component/elements/Form/validationschema';

const Index = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  // const [isPopup, setIsPopup] = useState(false);
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const product of cart.products) {
      totalPrice += product.price * product.purchased_quantity;
    }
    return totalPrice;
  };
  const total = calculateTotalPrice();
  const handleCheckout = async () => {
    const data = await axios.post('http://localhost:3000/api/checkout/', {
      amount: total + 50,
    });
    const htmlBlob = new Blob([data.data], { type: 'text/html' });
    const url = URL.createObjectURL(htmlBlob);

    // Open the HTML file in a new tab
    window.open(url);
  };
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNo: '',
      city: '',
      email: '',
      shippingAddress: '',
      postcode: '',
    },
    onSubmit: async () => {
      await handleCheckout();
    },

    validationSchema,
  });

  const { errors } = formik;
  const router = useRouter();
  const { isValid } = router.query;

  const handleClose = () => {
    const { pathname, query } = router;
    delete query.is_valid;

    router.push({ pathname, query });
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const commonProps = {
    onClose: handleClose,
    isOpen,
    onOpen,
    onOpenChange,
  };

  return (
    <Main meta={<Meta />}>
      <Container className="mx-auto mt-12 h-full min-h-screen w-full   max-w-[1920px] ">
        <main className="flex  flex-col justify-between border border-solid border-slate-100  p-12 pb-6 shadow-sm md:mb-16 md:mt-12 md:flex-row md:border-r-[2px]">
          <section className="mt-10 md:mt-0 md:border-r-[1.5px] md:border-solid md:border-slate-100 md:pr-6">
            <h1 className=" mb-16 hidden text-5xl font-semibold md:block">
              Confirm and pay
            </h1>

            {isValid !== undefined ? (
              isValid === 'true' ? (
                <ModalPop {...commonProps} />
              ) : (
                <FailedModal {...commonProps} />
              )
            ) : null}

            <form onSubmit={formik.handleSubmit}>
              <Heading
                title="Enter your details"
                para="We'll be sending your checkout confirmation to the details below."
                className="mb-8"
              />

              <div className="mb-11 grid gap-6 py-2 xl:grid-cols-2">
                <InputField
                  type="text"
                  label="Full Name"
                  placeholder="Enter your full name"
                  errmessage={errors.fullName}
                  name="fullName"
                  onChange={formik.handleChange}
                />

                <InputField
                  type="number"
                  label="Phone no"
                  placeholder="Enter your phone number."
                  errmessage={errors.phoneNo}
                  name="phoneNo"
                  onChange={formik.handleChange}
                />
                <InputField
                  type="text"
                  label="City"
                  placeholder="Shipping address city"
                  errmessage={errors.city}
                  name="city"
                  onChange={formik.handleChange}
                />
                <InputField
                  type="email"
                  label="email"
                  placeholder="Enter email"
                  errmessage={errors.email}
                  name="email"
                  onChange={formik.handleChange}
                />
              </div>

              <Heading
                title="Additional information"
                para="We need a few more details to complete your reservation."
                className="mb-8"
              />
              <div className="mb-11 grid gap-6 py-2 xl:grid-cols-2">
                <InputField
                  type="text"
                  label="Shipping address"
                  placeholder="1411 Broadway Fl 34"
                  errmessage={errors.shippingAddress}
                  name="shippingAddress"
                  onChange={formik.handleChange}
                />
                <InputField
                  type="number"
                  label="Postcode"
                  placeholder="Postal code"
                  errmessage={errors.postcode}
                  name="postcode"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="mb-10">
                <h2 className=" mb-1 text-lg font-semibold md:text-2xl">
                  Total: 250 KWD
                </h2>
                <p className="text-xs text-lightText ">You will pay in KWD</p>
              </div>
              <div>
                <p className=" mb-3 text-xs text-lightText">
                  With payment, you agree to the general
                  <span className="text-[#1733B6]">
                    terms and conditions of website
                  </span>
                  & the
                  <span className="text-[#1733B6]">activity provider.</span>
                </p>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] px-5 py-3 font-semibold text-white md:w-auto"
                >
                  Confirm and pay <BiShield />
                </button>
              </div>
            </form>
          </section>

          <section className=" flex   flex-col gap-4 md:mt-0 md:border-r-[1.5px] md:border-solid md:border-slate-100 md:pr-6  ">
            <h1 className=" mb-10 text-3xl font-semibold md:hidden">
              Confirm and pay
            </h1>
            <CheckoutSummary values={formik.values} />
            <TotalPrice />
          </section>
        </main>
      </Container>
    </Main>
  );
};

export default Index;
