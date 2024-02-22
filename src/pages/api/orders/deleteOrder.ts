/* eslint-disable no-console */
import axios from 'axios';

export default async function deleteOrder(
  req: { query: { orderId: any } },
  res: any
) {
  const { orderId } = req.query; // assuming orderId is sent as a query parameter
  try {
    const response = await axios.delete(
      `http://${process.env.NEXT_PUBLIC_API_INTERNAL}/orders/${orderId}`
    );
    if (response.status === 200) {
      res.status(204).end();
    } else {
      res.status(response.status).json({ error: 'Failed to delete order' });
    }
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
