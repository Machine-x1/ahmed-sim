/* eslint-disable no-console */

// 'use client';

import { Input } from '@nextui-org/react';
import { FiSearch } from 'react-icons/fi';
// import { useDebouncedCallback } from 'use-debounce';

const SearchBar = ({ setSearchValue }: { setSearchValue?: any }) => {
  return (
    <Input
      label="Search"
      isClearable
      radius="lg"
      size="sm"
      fullWidth
      className=""
      onChange={(e) => {
        // handleSearch(e.target.value);
        setSearchValue(e.target.value);
      }}
      classNames={{
        label: 'text-black/50 dark:text-white/90',
        input: [
          'bg-transparent',
          'text-black/90 dark:text-white/90',
          'placeholder:text-default-700/50 dark:placeholder:text-white/60',
        ],
        innerWrapper: 'bg-transparent',
        inputWrapper: [
          'shadow-sm',
          'bg-default-200/50',
          'dark:bg-default/60',
          'backdrop-blur-sm',
          'backdrop-saturate-200',
          'hover:bg-default-200/70',
          'dark:hover:bg-default/70',
          'group-data-[focused=true]:bg-default-200/50',
          'dark:group-data-[focused=true]:bg-default/60',
          '!cursor-text',
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <FiSearch
          className="pointer-events-none mb-0.5  shrink-0  text-slate-400 duration-200 group-focus-within:text-darkText"
          aria-hidden="true"
        />
      }
    />
  );
};

export default SearchBar;
