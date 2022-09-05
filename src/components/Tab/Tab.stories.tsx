import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Tab, { TabProps } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab
} as Meta;

const Template: Story<TabProps> = (args) => (
  <section style={{width: 500}}>
    <Tab {...args} />
  </section>
);

export const Default = Template.bind({});

Default.args = {
  tabs: [
    {
      title: 'Orders in progress',
      index: 0
    },
    {
      title: 'Completed orders',
      index: 1
    }
  ]
};
