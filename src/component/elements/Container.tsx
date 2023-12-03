import classNames from 'classnames';
import type { FC, ReactNode } from 'react';
import React from 'react';

type ContainerTag = 'section' | 'div' | 'main' | 'header' | 'footer';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  tag?: ContainerTag;
  flexDirection?: 'row' | 'column';
  bgColor?: string;
  children?: ReactNode;
}
const Container: FC<ContainerProps> = ({
  children,
  className,
  tag = 'div',
  flexDirection = 'column',
  bgColor,
  ...rest
}) => {
  return React.createElement(
    tag,
    {
      className: classNames(
        bgColor ?? 'bg-white',
        {
          flex: flexDirection !== 'column',
          'flex-col': flexDirection === 'column',
          'flex-row': flexDirection === 'row',
        },
        className
      ),
      ...rest,
    },
    children
  );
};

export default Container;
