import axios from 'axios';
/* eslint-disable no-console */

export default async function getAllOrders(_req: any, res: any) {
  try {
    const response = await axios.get(`${process.env.API_EXTRANL}/orders`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
