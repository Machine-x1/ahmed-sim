import type { NextApiRequest, NextApiResponse } from 'next';

import requestHandler from '@/apps/helpers/requestHandler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search, category } = req.query;

  if (search) {
    const searchData = await requestHandler(
      'products',
      'GET',
      {},
      {},
      { search }
    );
    return res.status(200).json({ ...searchData });
  }
  if (category && category?.length > 1) {
    const categoryhData = await requestHandler(
      'products',
      'GET',
      {},
      {},
      { category }
    );
    return res.status(200).json({ ...categoryhData });
  }

  return res.status(200).json({ message: 'Hello from Next.js!' });
}
  