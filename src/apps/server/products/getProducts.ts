import requestHandler from '../requestHandler';

export default async function getProducts() {
  const products = await requestHandler('products', 'GET', {
  },);
  return products.data;
}
