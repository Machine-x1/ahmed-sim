/* eslint-disable no-console */

// 'use client';

import { Input } from '@nextui-org/react';
import { FiSearch } from 'react-icons/fi';
// import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  // const handleSearch = useDebouncedCallback((term: string) => {
  //   const params = new URLSearchParams(searchParams);
  //   params.set('page', '1');
  //   if (term) {
  //     params.set('query', term);
  //   } else {
  //     params.delete('query');
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // }, 300);
  return (
    // <div className="group  hidden w-1/2 items-center gap-x-1 rounded-full border-[1px] border-lightText/50 bg-white px-4 py-1.5 focus-within:border-white md:flex">
    //   <FiSearch
    //     className="text-gray-500 duration-200 group-focus-within:text-darkText"
    //     aria-hidden="true"
    //   />

    //   <input
    //     type="text"
    //     // value={text}
    //     onChange={(e) => {
    //       console.log('object', e.target.value);
    //       // handleSearch(e.target.value);
    //     }}
    //     placeholder="Search for products"
    //     className="flex-1 outline-none placeholder:text-sm"
    //     defaultValue={searchParams.get('query')?.toString()}
    //   />
    // </div>
    <Input
      label="Search"
      isClearable
      radius="lg"
      size="sm"
      fullWidth
      className=""
      onChange={(e) => {
        console.log('object', e.target.value);
        // handleSearch(e.target.value);
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
