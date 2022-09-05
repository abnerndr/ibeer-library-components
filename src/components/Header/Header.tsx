import React from 'react';
import { Icon } from '../..';
import classNames from 'classnames';

import { HeaderProps } from './types';

const Header = ({title, onClick, align = 'center'}: HeaderProps) => {
  const style = classNames('w-full h-6 flex items-center');
  const styleTitle = classNames(`text-gray-500 text-base flex-1 px-2 text-${align}`);

  return (
    <header className={style}>
      {onClick && (
        <button type="button" className="absolute z-10" onClick={onClick}>
          <Icon.MdOutlineKeyboardArrowLeft className="inline-block w-6 h-6 text-neon-900" />
        </button>
      )}
      <h1 className={styleTitle}>{title}</h1>
    </header>
  );
};

export type { HeaderProps };

export default Header;

