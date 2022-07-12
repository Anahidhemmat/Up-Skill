import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "Button",
  component: ButtonComponent,
};

export const ContainedPrimary = () => (
  <ButtonComponent variant="contained" color="#90caf9">
    Contained Primary
  </ButtonComponent>
);
