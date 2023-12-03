/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */

'use client';

import React, { useState } from 'react';

import Container from './Container';
import SelectCat from './SelectCat';

const CatSection = () => {
  const [value, setValue] = useState('steer-wheels');
  return (
    <Container className="">
      <div className="  flex w-full ">
        <h2 className=" flex w-full  items-center  justify-center text-center font-['Poppins']  text-2xl   font-semibold leading-tight text-mainOrange">
          {value}
        </h2>
        <div className="   flex w-full items-center justify-center gap-2 ">
          <SelectCat
            // value={value}
            onChange={(value) => {
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
