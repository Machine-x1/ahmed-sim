import type { HTMLInputTypeAttribute, ReactElement, ReactNode } from 'react';
import type { PaginationOptions } from 'swiper/types';

// SwiperCarousel types
export interface SwiperProps<T> {
  item: Array<T>;
  children: ReactElement<{ item: T; key: number }>;
  slidesPerView?: number;
  spaceBetween?: number;
  navigation?: boolean;
  pagination?: PaginationOptions | undefined | boolean;
  swiperSlideClass?: string;
  swiperContainerClass?: string;
}

// RadioButton types

export type RadioButtonProps = {
  label?: string;
  name: string;
  labelStyle?: string;
  values?: string;
  children?: ReactNode;
  height?: string;
  // type?: HTMLInputTypeAttribute;
};

// PasswordInput types

export type PasswordProps = {
  label?: string;
  name: string;
  placeholder?: string;
};

export interface SearchFieldProps {
  placeholder: string;
}

export interface Option {
  value: string;
  label: string;
}

export interface Props {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export type InputProps = {
  label?: string;
  name: string;
  placeholder?: string;
  labelStyle?: string;
  type?: HTMLInputTypeAttribute;
  icon?: ReactNode;
};

export type TextProps = {
  label?: string;
  name: string;
  placeholder?: string;
};

export type TypeProps = {
  label?: string;
  name: string;
  placeholder?: string;
  labelStyle?: string;
  type?: HTMLInputTypeAttribute;
};

export interface AvatarOptionsProps {
  avatarImageSize: string;
  rightSideChildren: ReactNode;
  AvatarContent: ReactNode;
}

export type StyleClassesTypes =
  | 'primary'
  | 'secondary'
  | 'large_primary'
  | 'tertiary'
  | 'tertiary_Icon'
  | 'noti_tab_active'
  | 'noti_tab_inctive'
  | 'accept_invite'
  | 'reject_invite'
  | 'filter_tab_active'
  | 'filter_tab_inctive'
  | 'promoted'
  | 'promotedGrid'
  | 'pending'
  | 'active'
  | 'Suspend'
  | 'createReel'
  | 'remove'
  | 'seeMore'
  | 'delete'
  | 'large_secondary';

// export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: ReactNode;
//   flexDirection?: 'row' | 'column';
//   bgColor?: string;
//   tag?: string;
// }

type ContainerTag = 'section' | 'div' | 'main' | 'header' | 'footer';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  tag?: ContainerTag;
  flexDirection?: 'row' | 'column';
  bgColor?: string;
  children: ReactNode;
}

export interface ImageWrapperProps {
  className?: string;
  layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
  alt: string;
  src: string;
  lazy?: boolean;
  priority?: boolean;
}

export type LabelProps = {
  label?: string;
  htmlFor: string;
  labelStyle?: string;
};

export type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'submit' | 'reset' | 'button';
  btnStyle: StyleClassesTypes;
  disable?: boolean;
  handleClick?: () => void;
};

export type ShimmerProps = {
  size: string;
  height?: string;
  bgColor?: string;
};

export interface Emojies {
  emoji: string;
  description: string;
  category: string;
  aliases: string[];
  tags: string[];
  unicode_version: string;
  ios_version: string;
  skin_tones?: boolean;
}

export interface InputValue {
  type: string;
  value: string;
}

export interface CaIcons {
  [key: string]: ReactNode;
}
