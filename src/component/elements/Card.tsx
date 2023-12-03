import type { ReactNode } from 'react';
import React from 'react';

type CardProps = {
  type: 'primary' | 'secondary' | 'success' | 'warning';
  title: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ type, title, children }) => {
  let bgColor: string;
  let textColor: string;
  let titleBorderColor: string;

  switch (type) {
    case 'primary':
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      titleBorderColor = 'border-blue-500';
      break;
    case 'secondary':
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      titleBorderColor = 'border-gray-500';
      break;
    case 'success':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      titleBorderColor = 'border-green-500';
      break;
    case 'warning':
      bgColor = 'bg-yellow-100';
      textColor = 'text-yellow-800';
      titleBorderColor = 'border-yellow-500';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
      titleBorderColor = 'border-gray-500';
  }

  return (
    <div
      className={`rounded-lg p-6 shadow-lg ${bgColor} ${textColor} border border-gray-300`}
    >
      <h2
        className={`mb-4 border-b pb-2 text-2xl font-bold ${titleBorderColor}`}
      >
        {title}
      </h2>
      <div className="text-lg leading-6">{children}</div>
    </div>
  );
};

export default Card;
