/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { FieldAttributes } from 'formik';
import { Field, useField } from 'formik';
import type { HTMLInputTypeAttribute } from 'react';
import React, { useState } from 'react';

import { TypographyText } from '../Typography';

export type InputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  labelStyle?: string;
  type?: HTMLInputTypeAttribute;
};

const InputField: React.FC<InputProps & FieldAttributes<InputProps>> = ({
  label,
  name,
  placeholder,
  type,
  ...rest
}) => {
  const [, meta] = useField(name);
  const [, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="relative w-full">
      {label ? (
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      ) : null}

      <Field
        id={name}
        name={name}
        type={type ?? 'text'}
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoComplete={false.toString()}
        placeholder={placeholder}
        className={` block w-full rounded-lg border border-[#437e60] bg-[#00213d] p-2.5 text-sm text-gray-900 focus:border-[#437e60] focus:outline-none focus:ring-[#437e60] dark:border-[#437e60] dark:bg-[#00213d] dark:text-white dark:placeholder:text-gray-400 dark:focus:border-[#437e60] dark:focus:ring-[#437e60]
        ${meta.touched && meta.error && 'border-red-400'}`}
      />
      <div className="mt-1   text-red-500">
        <TypographyText tag="span">{meta.error}</TypographyText>
      </div>
    </div>
  );
};

export default InputField;
