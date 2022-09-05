import React from 'react';
import classNames from 'classnames';

import { ButtonProps, ThemeButton } from './types';

const colors: ThemeButton = {
  light: {
    hover: ['hover:bg-crema-500', 'hover:bg-gray-500', 'hover:bg-success-500', 'hover:bg-neon-900', 'hover:bg-coral-900'],
    text: ['text-crema-500', 'text-gray-500', 'text-success-500', 'text-neon-900', 'text-coral-900']
  },
  outline: {
    hover: ['hover:bg-crema-500', 'hover:bg-gray-500', 'hover:bg-success-500', 'hover:bg-neon-900', 'hover:bg-coral-900'],
    border: ['border-crema-500', 'border-gray-500', 'border-success-500', 'border-neon-900', 'border-coral-900'],
    text: ['text-crema-500', 'text-gray-500', 'text-success-500', 'text-neon-900', 'text-coral-900']
  },
  solid: {
    hover: ['hover:bg-crema-500', 'hover:bg-gray-500', 'hover:bg-success-500', 'hover:bg-neon-800', 'hover:bg-coral-800'],
    bg: ['bg-crema-500', 'bg-gray-500', 'bg-success-500', 'bg-neon-900', 'bg-coral-900']
  },
}

const generateColor = (color: string, variant: string): string => {
  return ['crema', 'gray', 'success'].includes(color) ? `${color}-500` : `${color}-${variant}`;
}

const Button = ({
  children,
  variant = 'solid',
  color = 'neon',
  disabled,
  onClick,
  full,
  normal,
  size = 'normal',
  ...props
}: ButtonProps) => {
  const buttonProps = {
    variant,
    color: disabled ? 'gray' : color,
    onClick,
    disabled,
    size,
    ...props
  }

  const solidStyle: string[] = [
    `border-transparent`,
    colors.solid.bg?.find(item => item.includes(buttonProps.color)) || '',
    colors.solid.hover?.find(item => item.includes(buttonProps.color)) || '',
    'text-white'
  ];
  
  const outlineStyle: string[] = [
    'bg-transparent',
    `hover:text-white`,
    colors.outline.hover?.find(item => item.includes(buttonProps.color)) || '',
    colors.outline.border?.find(item => item.includes(buttonProps.color)) || '',
    colors.outline.text?.find(item => item.includes(buttonProps.color)) || ''
  ];

  const lightStyle: string[] = [
    'bg-transparent',
    'border-none',
    `hover:text-white`,
    colors.light.text?.find(item => item.includes(buttonProps.color)) || '',
    colors.light.hover?.find(item => item.includes(buttonProps.color)) || ''
  ];

  const disabledStyle: string[] = [
    'cursor-not-allowed',
    'hover:bg-current',
    'hover:text-current'
  ];

  const baseStyle: string[] = [
    full ? 'w-full' : 'w-auto',
    'text-base',
    'rounded',
    'border',
  ];

  const sizeStyle = {
    normal: 'py-3 px-6',
    small: 'py-1 px-4',
  };

  const variants = {
    solid: solidStyle,
    light: lightStyle,
    outline: outlineStyle
  };

  const style = classNames(
    baseStyle,
    sizeStyle[size],
    variants[buttonProps.variant],
    disabled && disabledStyle,
    !normal && 'uppercase',
    !normal && 'font-bold',
  );

  return (
    <button
      {...buttonProps}
      type={buttonProps.type}
      className={style}
      disabled={buttonProps.disabled}
      onClick={!disabled ? buttonProps.onClick : () => {}}>
      {children}
    </button>
  );
};

export type { ButtonProps };

export default Button;

