import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { coral } from './Toast';
import { crema, success, Toaster, warning } from './index';
import Button from '../Button';

export default {
  title: 'Components/Toast',
} as Meta;

const Template: Story<any> = (args) => {

  return (
    <div style={{ width: 600 }}>
      <Button color="coral" variant="light" onClick={() => success('titulo', 'texto')}>success</Button>
      <Button color="coral" variant="light" onClick={() => warning('titulo', 'texto')}>warning</Button>
      <Button color="coral" variant="light" onClick={() => crema('titulo', 'btexto')}>crema</Button>
      <Button color="coral" variant="light" onClick={() => coral('titulo', 'btexto')}>coral</Button>

      <Toaster position="top-right" />
    </div>
  )
};

export const Default = Template.bind({});

Default.args = {
  children: 'Title',
  size: 'default'
};
