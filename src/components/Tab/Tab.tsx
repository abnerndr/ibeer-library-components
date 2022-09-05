import React, { useState } from 'react';
import classNames from 'classnames';

import { TabProps, TabItem } from './types';

const Tab = ({ tabs, onSelect }: TabProps) => {
  const [selected, setSelected] = useState<TabItem>(tabs[0]);

  return (
    <section className="border-b border-gray-500 border-opacity-5">
      <nav className="-mb-px flex">
        {tabs.map((tab: TabItem) => (
          <button
            key={tab.title}
            type="button"
            className={classNames(
              selected === tab
                ? 'border-neon-900 text-neon-900 font-bold'
                : 'border-gray-500 border-opacity-20 text-gray-500 hover:border-neon-900',
              `w-1/${tabs.length} h-14 text-center border-b-2 font-normal text-sm`
            )}
            aria-current={selected === tab ? 'page' : undefined}
            onClick={() => {
              if (onSelect) onSelect(tab);
              setSelected(tab);
            }}
          >
            {tab.title}
          </button>
        ))}
      </nav>
    </section>
  );
};

export type { TabProps };

export default Tab;

