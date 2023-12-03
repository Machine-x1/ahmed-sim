import classNames from 'classnames';
import React from 'react';

type TagNames = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type Props = {
  tag: TagNames;
  children: React.ReactNode;
  className?: string;
} & React.HTMLProps<HTMLElementTagNameMap[TagNames]>;

export const TypographyText: React.FC<Props> = ({
  tag,
  children,
  className,
  ...props
}) => {
  const Element = React.createElement(
    tag,
    { className: classNames(className), ...props },
    children
  );
  return Element;
};
