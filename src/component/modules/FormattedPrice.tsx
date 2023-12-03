interface Amount {
  amount: number | string;
}

const FormattedPrice = ({ amount }: Amount) => {
  const formattedAmount = amount?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
