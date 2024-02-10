import * as Yup from 'yup';

export const ContactValidationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  description: Yup.string().required('Required'),
});
