import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import Badge from '../Badge';

export default {
  title: 'Components/Avatar',
  component: Avatar
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'rounded',
  size: 'default'
};

export const Profile = Template.bind({});

Profile.args = {
  variant: 'rounded',
  size: 'default',
  title: 'John Doe',
  description: 'johndoe@email.com'
};
