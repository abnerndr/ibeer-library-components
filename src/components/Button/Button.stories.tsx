import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Button Text',
  color: 'neon',
  variant: 'solid',
  type: 'button'
};
