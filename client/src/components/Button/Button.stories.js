import React from "react";
import ButtonComponent from "./Button";

export default {
  title: "Button",
  component: ButtonComponent,
};

export const ContainedPrimary = ({ children }) => (
  <ButtonComponent variant="contained" color="primary">
    {children}
  </ButtonComponent>
);

export const ContainedSecondary = ({ children }) => (
  <ButtonComponent variant="contained" color="secondary">
    {children}
  </ButtonComponent>
);

export const ContainedError = ({ children }) => (
  <ButtonComponent variant="contained" color="error">
    {children}
  </ButtonComponent>
);

export const ContainedWarning = ({ children }) => (
  <ButtonComponent variant="contained" color="warning">
    {children}
  </ButtonComponent>
);
