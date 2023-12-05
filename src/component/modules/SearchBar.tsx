/* eslint-disable no-console */

// 'use client';

import { useSearchParams } from 'next/navigation';
import { FiSearch } from 'react-icons/fi';
// import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
  const searchParams = useSearchParams();
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
    <div className="group  hidden w-1/2 items-center gap-x-1 rounded-full border-[1px] border-lightText/50 bg-white px-4 py-1.5 focus-within:border-white md:flex">
      <FiSearch
        className="text-gray-500 duration-200 group-focus-within:text-darkText"
        aria-hidden="true"
      />

      <input
        type="text"
        // value={text}
        onChange={(e) => {
          console.log('object', e.target.value);
          // handleSearch(e.target.value);
        }}
        placeholder="Search for products"
        className="flex-1 outline-none placeholder:text-sm"
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  );
};

export default SearchBar;
