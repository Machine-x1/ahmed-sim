import type { AlertType } from '@/component/elements/Alert';
import type { BtnType } from '@/component/elements/Button';

export interface DefaultStyle<T extends AlertType | BtnType> {
  bgType: 'default';
  bgClass: T;
}

export interface LightStyle<T extends AlertType | BtnType> {
  bgType: 'light';
  bgClass: T;
}
