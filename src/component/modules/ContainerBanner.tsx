import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const ContainerBanner = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} mx-auto w-full  max-w-screen-2xl px-4   py-12`}
    >
      {children}
    </div>
  );
};

export default ContainerBanner;
