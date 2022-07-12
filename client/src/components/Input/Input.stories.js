import React from "react";
import TextFieldComponent from "./Input";

export default {
  title: "Input",
  component: TextFieldComponent,
};

const Template = (args) => <TextFieldComponent {...args} />;

export const OutlinedInput = Template.bind({});
OutlinedInput.args = {
  variant: "outlined",
};

export const FilledInput = Template.bind({});
FilledInput.args = {
  variant: "filled",
};

export const StandardInput = Template.bind({});
StandardInput.args = {
  variant: "standard",
};

// export const SmallInput = () => <TextFieldComponent size="small" />;
// export const MediumInput = () => <TextFieldComponent size="medium" />;
// export const LargeInput = () => <TextFieldComponent size="large" />;
