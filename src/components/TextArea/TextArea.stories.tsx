import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import TextArea, { TextareaProps } from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea
} as Meta;

const Template: Story<TextareaProps> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: 'Placeholder'
};
