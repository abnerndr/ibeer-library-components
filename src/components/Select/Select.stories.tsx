import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Select from './Select';
import { Option, SelectProps } from './types';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});

const options: Option[] = [
 { label: 'a', value: 'a' },
 { label: 'b', value: 'b' },
 { label: 'c', value: 'c', disabled: true },
]

Default.args = {
  options,
  label: 'CEP',
  placeholder: 'Seu cep',
  onChange: (value) => console.log({ value })
};
