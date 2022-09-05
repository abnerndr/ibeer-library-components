import React, { useRef } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  type: "text",
  placeholder: "Placeholder",
  label: "Text",
};

export const Mask = Template.bind({});

Mask.args = {
  type: "tel",
  mask: "CEP",
  label: "Text",
};

export const Leading = Template.bind({});

Leading.args = {
  leading: "meu texto",
};

export const Money = Template.bind({});

Money.args = {
  mask: "MONEY",
  moneyProps: {
    onValueChange: (e) => console.log(e),
  },
  label: "Text",
};
