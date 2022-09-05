import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import CreditCard, { CreditCardProps } from './CreditCard';

export default {
  title: 'Components/CreditCard',
  component: CreditCard
} as Meta;

const Template: Story<CreditCardProps> = (args) => <CreditCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  number: '4111 1111 1111 1111',
  holder: 'Holder Name',
  validate: '00/00',
  code: '000'
};
