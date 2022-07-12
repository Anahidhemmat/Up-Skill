import React from "react";
import TextFieldComponent from "./Input";

export default {
  title: "Input",
  component: TextFieldComponent,
};

const SmallInput = () => <TextFieldComponent size="small" />;
const MediumInput = () => <TextFieldComponent size="medium" />;
const LargeInput = () => <TextFieldComponent size="large" />;
