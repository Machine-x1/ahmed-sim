import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phoneNo: Yup.number().required('Phone number is required'),
  city: Yup.string().required('City is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  shippingAddress: Yup.string().required('Shipping address is required'),
  postcode: Yup.number().required('Postcode is required'),
});
