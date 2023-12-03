import classNames from 'classnames';
import React from 'react';

import type { DefaultStyle, LightStyle } from '@/apps/interface/element';

export const btnClasses = {
  btn_standard: {
    default: 'bg-white',
    light: 'bg-white',
  },
  btn_main: {
    default: 'bg-main-default hover:bg-main-default/70 active:bg-main-default',
    light: 'bg-main-light hover:bg-main-light/70 active:bg-main-light',
  },
  btn_note: {
    default: 'bg-note-default hover:bg-note-default/70 active:bg-note-default',
    light: 'bg-note-light hover:bg-note-light/70 active:bg-note-light',
  },
  btn_valid: {
    default:
      'bg-valid-default hover:bg-valid-default/70 active:bg-valid-default',
    light: 'bg-valid-light hover:bg-valid-light/70 active:bg-valid-light ',
  },
  btn_critical: {
    default:
      'bg-critical-default hover:bg-critical-default/70 active:bg-critical-default',
    light:
      'bg-critical-light hover:bg-critical-light/70 active:bg-critical-light',
  },
  btn_attention: {
    default:
      'bg-attention-default hover:bg-attention-default/70 active:bg-attention-default',
    light:
      'bg-attention-light hover:bg-attention-light/70 active:bg-attention-light',
  },
};

export type BtnType =
  | 'btn_valid'
  | 'btn_critical'
  | 'btn_main'
  | 'btn_attention'
  | 'btn_standard'
  | 'btn_note';

type Props = {
  tag?: 'button' | 'a';
  children: React.ReactNode;
  className?: string;
  // btnStyle?: BtnType;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  (DefaultStyle<BtnType> | LightStyle<BtnType>);

export const Button: React.FC<Props> = ({
  tag = 'button',
  children,
  className,
  ...props
}) => {
  const Element = React.createElement(
    tag,
    {
      className: `${
        props.bgClass !== undefined
          ? `${btnClasses[props.bgClass as BtnType][props.bgType]} button`
          : 'bg-white'
      } ${classNames(className)}`,
      ...props,
    },
    children
  );
  return Element;
};
