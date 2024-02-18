/* eslint-disable unused-imports/no-unused-vars */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { amount } = req.body;
  const responseFromApi = await axios.post(
    // 'https://api.simrckw.com/payment/request',
    'https://3448-41-232-59-125.ngrok-free.app/payment/request',
    { amount }
  );

  res.status(200).send(responseFromApi.data);
}
