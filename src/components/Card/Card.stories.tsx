import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <div className="text-gray-500">
      Some text
    </div>
  ),
  className: 'h-10 px-4 py-5 w-64 items-center justify-center flex'
};
