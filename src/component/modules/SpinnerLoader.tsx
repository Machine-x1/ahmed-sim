import { Spinner } from '@nextui-org/react';
import React from 'react';

const SpinnerLoader = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner label="Loading..." color="warning" />
    </div>
  );
};

export default SpinnerLoader;
