import type { ReactElement, ReactNode } from 'react';
import { BiCheckCircle, BiErrorCircle, BiInfoCircle } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { MdNotificationsNone } from 'react-icons/md';
import { PiFileCodeFill } from 'react-icons/pi';

import type { DefaultStyle, LightStyle } from '@/apps/interface/element';

import Container from './Container';
import { TypographyText } from './Typography';

export const alertClasses = {
  alert_standard: {
    default: 'bg-white',
    light: 'bg-white',
    icon: <PiFileCodeFill />,
  },
  alert_main: {
    default: 'bg-main-default',
    light: 'bg-main-light',
    icon: <MdNotificationsNone />,
  },
  alert_note: {
    default: 'bg-note-default',
    light: 'bg-note-light',
    icon: <BiInfoCircle />,
  },
  alert_valid: {
    default: 'bg-valid-default',
    light: 'bg-valid-light',
    icon: <BiCheckCircle />,
  },
  alert_critical: {
    default: 'bg-critical-default',
    light: 'bg-critical-light',
    icon: <BiErrorCircle />,
  },
  alert_attention: {
    default: 'bg-attention-default',
    light: 'bg-attention-light',
    icon: <BiErrorCircle />,
  },
};

export type AlertType =
  | 'alert_valid'
  | 'alert_critical'
  | 'alert_main'
  | 'alert_attention'
  | 'alert_standard'
  | 'alert_note';

export type AlertProps = {
  // type?: AlertType;
  title: string | ReactNode | ReactElement;
  description: string | ReactNode | ReactElement;
} & (DefaultStyle<AlertType> | LightStyle<AlertType>);

const Alert = (props: AlertProps) => {
  return (
    <Container
      flexDirection="row"
      className={`alert ${
        props.bgClass !== undefined
          ? alertClasses[props.bgClass][props.bgType]
          : 'bg-white'
      }`}
      tag="div"
      bgColor=""
    >
      <Container
        flexDirection="row"
        className="flex items-center gap-6"
        bgColor="bg-none"
      >
        <span>{alertClasses[props.bgClass as AlertType].icon}</span>
        <Container flexDirection="column" className="" bgColor="bg-none">
          <TypographyText tag="p" className="text-xl font-bold">
            {props.title}
          </TypographyText>
          <TypographyText tag="p" className="text-black/60">
            {props.description}
          </TypographyText>
        </Container>
      </Container>
      <Container flexDirection="row" className="" bgColor="bg-none">
        <IoMdClose />
      </Container>
    </Container>
  );
};

export default Alert;
