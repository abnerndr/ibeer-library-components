import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <div style={{ width: 200 }}>
    <Checkbox {...args} /> 
  </div>
);

export const Default = Template.bind({});

Default.args = {
  label: 'Meu radio',
  id: 'my-radio-id',
  name: 'my-radio',
  disabled: false,
  error: ''
};
