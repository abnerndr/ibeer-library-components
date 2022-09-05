import React, { useState } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import Button from '../Button';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [opened, setOpened] = useState(false)

  return (
    <>
      <Button onClick={() => setOpened(true)} color="coral" variant="light">
        Abrir
      </Button>

      <Modal open={opened} onClose={() => setOpened(false)}>
        {args.children}
      </Modal>
    </>
  )
};

export const Default = Template.bind({});

Default.args = {
  children: <div className="text-neon-500">Some text</div>,
};
