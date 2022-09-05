/* eslint-disable import/no-anonymous-default-export */
import Button from "./Button";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

export default {
  title: "Pages/Button",
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
// export const ButtonPage = () => <Button />;
