import React from 'react';
import classNames from 'classnames';
import { CardProps } from './types';

const Card = ({
  children,
  className,
  ...props
}: CardProps) => {
  const style = classNames('bg-white shadow sm:rounded-md', className);

  return (
    <section className={style} {...props}>
      {children}
    </section>
  );
};

export type { CardProps }

export default Card;

