import React from "react";
import NavbarComponent from "./Navbar";

export default {
  title: "Navbar",
  component: NavbarComponent,
};

const Template = (args) => <NavbarComponent {...args} />;

export const PrimaryNav = Template.bind({});
PrimaryNav.args = {
  color: "primary",
};

export const SecondaryNav = Template.bind({});
SecondaryNav.args = {
  color: "secondary",
};

export const SuccessNav = Template.bind({});
SuccessNav.args = {
  color: "success",
};

export const ErrorNav = Template.bind({});
ErrorNav.args = {
  color: "error",
};

export const WarningNav = Template.bind({});
WarningNav.args = {
  color: "warning",
};

export const InfoNav = Template.bind({});
InfoNav.args = {
  color: "info",
};
