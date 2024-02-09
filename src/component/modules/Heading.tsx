/* eslint-disable tailwindcss/no-custom-classname */
const Heading = ({
  title,
  para,
  className = '',
}: {
  title: string;
  para: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h2 className="text-dark-gray mb-2 text-lg font-semibold md:text-2xl">
        {title}
      </h2>
      <p className="text-primary-gray text-sm md:text-base">{para}</p>
    </div>
  );
};
export default Heading;
