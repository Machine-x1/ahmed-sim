import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phoneNo: Yup.number().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  postcode: Yup.number().required('Postcode is required'),
  AddressLine1: Yup.string().required('Shipping address 1 is required'),
  AddressLine2: Yup.string().required('Shipping address 2 is required'),
  city: Yup.string().required('City is required'),
  governorate: Yup.string().required('Governorate is required'),
  country: Yup.string().required('Country is required'),
});
