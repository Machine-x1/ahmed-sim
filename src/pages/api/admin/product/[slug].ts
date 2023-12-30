/* eslint-disable unused-imports/no-unused-vars */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    try {
      const { slug } = req.query;
      const { oldPrice, ...rest } = req.body;
      const updatedBody = { old_price: oldPrice, ...rest };
      await axios.put(
        `${process.env.API_EXTRANL}/products/${slug}`,
        updatedBody
      );

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
