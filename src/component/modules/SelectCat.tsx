// 'use client';

import { Select, SelectItem } from '@nextui-org/react';
import React from 'react';

interface Props {
  onChange?: (e: any) => void;
  value?: string;
}
const categories = [
  {
    label: 'steer-wheels',
    value: 'steer-wheels',
  },
  {
    label: 'paddels',
    value: 'paddels',
  },
  {
    label: 'accessories',
    value: 'accessories',
  },
];
const SelectCat = (props: Props) => {
  const { onChange, value } = props;
  return (
    <div className=" flex w-full items-center justify-center">
      <Select
        fullWidth
        variant="faded"
        size="sm"
        label="Select category"
        className="max-w-xs"
        onChange={onChange}
        value={value}
      >
        {categories.map((cat) => (
          <SelectItem key={cat.value} value={cat.value}>
            {cat.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCat;
