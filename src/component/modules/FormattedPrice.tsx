interface Amount {
  amount: number | string | undefined;
}

const FormattedPrice = ({ amount }: Amount) => {
  const formattedAmount = amount?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'KWD',
    maximumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>;
};

export default FormattedPrice;
