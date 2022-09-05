import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Radio, { RadioProps } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
} as Meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "Meu radio",
  subtitle: "",
  id: "my-radio-id",
  name: "my-radio",
  disabled: false,
  error: "",
};
