import type { FieldAttributes } from 'formik';
import { Field, useField } from 'formik';
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BiHide, BiShowAlt } from 'react-icons/bi';

import type { PasswordProps } from '@/apps/interface/Elements';

import { TypographyText } from '../Typography';

const PasswordField: React.FC<
  PasswordProps & FieldAttributes<PasswordProps>
> = ({ label, name, placeholder, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [, meta] = useField(name);

  const isShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="relative w-full">
        <div className="relative">
          {label ? (
            <label
              htmlFor={name}
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
          ) : null}
          <Field
            id={name}
            name={name}
            type={showPassword ? 'text' : 'password'}
            // maxLength="20"
            placeholder={placeholder}
            {...rest}
            className={`block w-full rounded-lg border border-[#437e60] bg-[#00213d] p-2.5 text-sm text-gray-900 focus:border-[#437e60] focus:outline-none focus:ring-[#437e60] dark:border-[#437e60] dark:bg-[#00213d] dark:text-white dark:placeholder:text-gray-400 dark:focus:border-[#437e60] dark:focus:ring-[#437e60]
          ${meta.touched && meta.error && 'border-red-400 dark:bg-gray-300'}`}
          />

          <div className="absolute right-0 top-10 flex cursor-pointer items-center pr-3">
            {showPassword ? (
              <BiShowAlt
                onClick={() => isShowPassword()}
                className="text-gray-800"
                size={20}
              />
            ) : (
              <BiHide
                onClick={() => isShowPassword()}
                className="text-gray-800"
                size={20}
              />
            )}
          </div>
        </div>
      </div>
      {/* {meta.touched && meta.error ? ( */}
      <div className="mt-1">
        <TypographyText
          tag="span"
          color={'text-red-500 dark:text-red-500' as 'text-red-500'}
        >
          {meta.error}
        </TypographyText>
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default PasswordField;
