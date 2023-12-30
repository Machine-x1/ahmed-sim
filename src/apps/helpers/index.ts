export const calculatePercentage = (
  originalPrice: any,
  discountedPrice: any
) => {
  if (originalPrice <= 0) {
    throw new Error('Original price must be greater than zero.');
  }
  if (discountedPrice < 0) {
    throw new Error('Discounted price cannot be negative.');
  }

  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return discountPercentage.toFixed();
};
