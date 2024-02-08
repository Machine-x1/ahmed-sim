/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable tailwindcss/no-custom-classname */
const InputField = ({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: string;
}) => {
  return (
    <div className="border-light-gray relative rounded-xl border border-solid px-4 py-5 md:w-96">
      <label className="text-primary-gray absolute -top-2 left-4 bg-white px-1 text-xs">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-dark-gray px-1 text-sm outline-none md:text-base"
      />
    </div>
  );
};
export default InputField;
