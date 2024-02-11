import { Input } from '@nextui-org/react';

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
      />
      {/* {errmessage && (
        <p className="text-xs italic text-red-500">{errmessage}</p>
      )} */}
    </>
  );
};
export default InputField;
