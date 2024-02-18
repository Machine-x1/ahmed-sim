/* eslint-disable no-console */
import axios from 'axios';

export default async function createOrder(req: any, res: any) {
  try {
    const response = await axios.post(
      `http://${process.env.NEXT_PUBLIC_API_INTERNAL}/orders`,
      req.body
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
