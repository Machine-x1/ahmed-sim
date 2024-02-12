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
      <h2 className="mb-2 text-lg font-semibold text-secondaryBlack md:text-2xl">
        {title}
      </h2>
      <p className="text-sm text-hoverTextColor md:text-base">{para}</p>
    </div>
  );
};
export default Heading;
