// // import { response } from '../../path/to/your/response-file'; // Adjust the path accordingly
// import type { NextApiRequest, NextApiResponse } from 'next';

// import { paymentrequest } from './paymentGatewayReq'; // Adjust the path and add the file extension accordingly

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST' || req.method === 'GET') {
//     const { amount, trackid, reference } = req.body;
//     // Check if the required fields are present
//     console.log(req.body, 'req.body');

//     if (!amount || !trackid || !reference) {
//       res.status(400).json({ error: 'Bad Request' });
//       return;
//     }
//     // Call the request function to obtain the form
//     const paymentForm = await paymentrequest(amount, trackid, reference);

//     // Send the generated form back to the frontend
//     res.status(200).json({ form: paymentForm });
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }