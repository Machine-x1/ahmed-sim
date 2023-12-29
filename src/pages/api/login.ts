import { setCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

import requestHandler from '@/apps/helpers/requestHandler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  console.log(email, password);
  const request = await requestHandler('login', 'POST', { email, password });
  if (request) {
    setCookie('ad_token', request.data.token, { req, res });
  }
  return res.status(request.status).json({ ...request });
}
