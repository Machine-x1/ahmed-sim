/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

import React, { useState } from 'react';

import Container from './Container';
import SearchBar from './SearchBar';
import SelectCat from './SelectCat';

const CatSection = () => {
  const [value, setValue] = useState('steer-wheels');
  return (
    <Container className="">
      <div className="  flex w-full gap-4 ">
        <h2 className=" flex w-full  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
          {value}
        </h2>
        <SearchBar />
        <div className="   flex w-full items-center justify-center gap-2 ">
          <SelectCat
            // value={value}
            onChange={(value: {
              target: { value: React.SetStateAction<string> };
            }) => {
              setValue(value.target.value);
              console.log('hi', value.target.value);
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export default CatSection;
