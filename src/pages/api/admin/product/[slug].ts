// pages/api/addProduct.js

import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
      // const { product } = req.body;
      const { slug } = req.query;
      console.log(req.body, 'ASQ');
      const updateProduct = await axios.put(
        `${process.env.API_EXTRANL}/products/${slug}`,
        req.body
      );
      // await axios.delete(`${process.env.API_EXTRANL}/products/${product.slug}`);
      console.log(updateProduct.data);
      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.log(error, 'from api');
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
