import axios from 'axios';
/* eslint-disable no-console */

export default async function getAllOrders(_req: any, res: any) {
  try {
    const response = await axios.get(
      `http://${process.env.NEXT_PUBLIC_API_INTERNAL}/orders`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
