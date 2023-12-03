/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { FieldAttributes } from 'formik';
import { Field, useField } from 'formik';
import React, { useState } from 'react';

import type { TextProps } from '@/apps/interface/Elements';

import { TypographyText } from '../Typography';

const TextAreaField: React.FC<TextProps & FieldAttributes<TextProps>> = ({
  name,
  label,
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
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        as="textarea"
        rows={4}
        cols={60}
        // className={`  block  h-[3.125rem] w-full rounded-lg border-[1px] border-gray-200 bg-white px-[1rem] pt-[0.5rem] text-[0.875rem] font-medium leading-4 text-black transition-all duration-150 ease-in-out hover:border-gray-400 focus:border-blue-200 focus:text-[1rem] focus:font-medium focus:text-black focus:outline-none sm:text-[1rem]  sm:leading-5
        className={` block w-full rounded-lg border border-[#437e60] bg-[#00213d] p-2.5 text-sm text-gray-900 focus:border-[#437e60] focus:outline-none focus:ring-[#437e60] dark:border-[#437e60] dark:bg-[#00213d] dark:text-white dark:placeholder:text-gray-400 dark:focus:border-[#437e60] dark:focus:ring-[#437e60]
        ${meta.touched && meta.error && 'border-red-400'}`}
      />
      <div className="mt-1   text-red-500">
        <TypographyText tag="span">{meta.error}</TypographyText>
      </div>
    </div>
  );
};

export default TextAreaField;
