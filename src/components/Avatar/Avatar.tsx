import React from 'react';
import { Icon } from '../..';
import classNames from 'classnames';

import { AvatarProps } from './types';

const Avatar = ({
  title,
  description,
  src,
  variant = 'circle',
  size = 'default',
  ...props
}: AvatarProps) => {
  const sizes: {[size: string]: string[]}  = {
    small: ['w-8', 'h-8'],
    default: ['w-12', 'h-12'],
    large: ['w-24', 'h-24']
  };

  const variants: {[variant: string]: string} = {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded'
  };

  const style = classNames('flex items-center', sizes[size]);
  const styleImg = classNames('inline-block w-full h-full', variants[variant]);
  const styleIcon = classNames('flex items-center justify-center w-full h-full overflow-hidden bg-crema-500', variants[variant]);

  return (
    <section className="flex items-center">
      <section className={style}>
        {src ? (
          <img src={src} className={styleImg} {...props} />
        ) : (
          <span className={styleIcon}>
            <Icon.MdPerson className="w-1/2 h-1/2 text-neon-900" title="Avatar" />
          </span>
        )}
      </section>
      {title && (
        <section className="flex flex-col justify-center ml-2.5">
          <h2 className="text-base font-bold text-black">{title}</h2>
          {description && (
            <section className="mt-1">
              {typeof description === 'string' ? (
                <p className="text-sm text-black">{description}</p>
              ) : description}
            </section>
          )}
        </section>
      )}
    </section>
  );
};

export type { AvatarProps };

export default Avatar;

