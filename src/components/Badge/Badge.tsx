import React from 'react';
import classNames from 'classnames';

import { BadgeProps } from './types';

const Badge = ({children, size = 'default', full}: BadgeProps) => {
  const sizes: {[size: string]: string | string[]}  = {
    small: 'h-4',
    default: ['h-6', 'py-1']
  };

  const style = classNames(
    'inline-block bg-crema-500 text-neon-900 text-xs text-center rounded px-2 align-middle',
    full && 'w-full',
    sizes[size]
  );

  return (
    <span className={style}>
      {children}
    </span>
  );
};

export type { BadgeProps };

export default Badge;

