// pages/api/addProduct.js

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { product } = req.body;
      await axios.delete(`${process.env.API_EXTRANL}/products/${product.slug}`);

      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
