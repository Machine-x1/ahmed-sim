import { Spinner } from '@nextui-org/react';
import React from 'react';

const loading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default loading;
