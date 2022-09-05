import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header
} as Meta;

const Template: Story<HeaderProps> = (args) => (
  <section style={{width: 400}}>
    <Header {...args} />
  </section>
);

export const Default = Template.bind({});

Default.args = {
  title: 'Page Name',
  align: 'center'
};
