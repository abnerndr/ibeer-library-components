import React, { useMemo } from 'react';
import './button.css';

interface ButtonProps {
  color?: 'red' | 'green' | 'blue' | 'primary'
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'full';
  /**
   * Button contents
   */
  value: string;
  type: 'button' | 'submit'
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'primary',
  primary = false,
  size = 'medium',
  value,
  type,
  ...props
}: ButtonProps) => {

  const buttonSize = useMemo(() => 
  size === 'small' && 'w-sm' ||
  size === 'medium' && 'w-md' ||
  size === 'large' && 'w-lg' ||
  size === 'full' && 'w-full'
     , [size])

  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type={type}
      className={`bg-red-500 text-white ${buttonSize}`}
      {...props}
    >
      {value}
    </button>
  );
};
