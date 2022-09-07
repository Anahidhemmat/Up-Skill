import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "Button",
  component: ButtonComponent,
  argTypes: {
    onClick: { action: "Clicked" },
    children: {
      defaultValue: "Default Text",
    },
  },
};

const Template = (args) => <ButtonComponent {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  color: "warning",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "error",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  color: "primary",
};
