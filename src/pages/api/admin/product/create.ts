// pages/api/addProduct.js

import type { NextApiRequest, NextApiResponse } from 'next';

import requestHandler from '@/apps/helpers/requestHandler';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, description, price, quantity, images, category } = req.body;

      const createProduct = await requestHandler('products', 'POST', {
        name,
        description,
        price,
        quantity,
        images,
        category,
      });
      res.status(200).json({ ...createProduct });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
