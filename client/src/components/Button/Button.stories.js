import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "Button",
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
  color: "warning",
  label: "submit",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
  color: "error",
  label: "submit",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  color: "success",
  label: "submit",
};
