import type { NextApiRequest, NextApiResponse } from 'next';

import requestHandler from '@/apps/helpers/requestHandler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, description } = req.body;
  const request = await requestHandler('contact', 'POST', {
    email,
    description,
  });

  return res.status(200).json({ data: request.data });
}
