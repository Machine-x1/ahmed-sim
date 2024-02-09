/* eslint-disable jsx-a11y/label-has-associated-control */

import { Input } from '@nextui-org/react';

/* eslint-disable tailwindcss/no-custom-classname */
const InputField = ({
  label,
  placeholder,
  type,
  defaultvalue,
  // valid,
  errmessage,
  name,
  value,
  onChange,
}: // value,
{
  label: string;
  placeholder: string;
  type: string;
  defaultvalue?: string;
  // valid?: boolean | undefined;
  errmessage?: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <Input
        label={label}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultvalue}
        // valid={valid}
        errorMessage={errmessage}
        name={name}
        value={value}
        onChange={onChange}

        // className="text-dark-gray px-1 text-sm outline-none md:text-base"
      />
      {/* {errmessage && (
        <p className="text-xs italic text-red-500">{errmessage}</p>
      )} */}
    </>
  );
};
export default InputField;
