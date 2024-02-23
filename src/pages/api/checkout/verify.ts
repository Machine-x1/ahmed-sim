/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { payId } = req.body;
  const responseFromApi = await axios.post(
    `${process.env.API_EXTRANL}/payment/verify`,
    { payid: payId }
  );

  // console.log('===============================');
  // console.log(responseFromApi);
  // console.log('===============================');
  if (responseFromApi.data.Status === '1') {
    res.status(200).send({ verfied: 'Done' });
  } else {
    res.status(422).send({ verfied: 'No' });
  }
}
