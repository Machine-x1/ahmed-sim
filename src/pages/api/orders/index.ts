import createOrder from './createOrder';
import getAllOrders from './getAllOrders';

export default function handler(req: any, res: any) {
  switch (req.method) {
    case 'GET':
      return getAllOrders(req, res);
    case 'POST':
      return createOrder(req, res);
    default:
      res.status(405).end();
  }
  return res.status(405).end();
}
