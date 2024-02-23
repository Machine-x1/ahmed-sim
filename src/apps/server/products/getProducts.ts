import requestHandler from '../requestHandler';

export default async function getProducts() {
  const products = await requestHandler(
    'products',
    'GET',
    {},
    {},
    { limit: '100' }
  );
  return products.data;
}

export async function getOrder() {
  const orders = await requestHandler('orders', 'GET', {}, {});
  return orders.data;
}
