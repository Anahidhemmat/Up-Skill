import React from "react";
import NavItem from "./NavItem";

export default {
  title: "NavItem",
  component: NavItem,
  argTypes: {
    children: {
      defaultValue: "Default Text",
    },
  },
};

const Template = (args) => <NavItem {...args} />;

export const TextPrimaryNavItem = Template.bind({});
TextPrimaryNavItem.args = {
  variant: "text",
  color: "primary",
};

export const TextSecondaryNavItem = Template.bind({});
TextSecondaryNavItem.args = {
  variant: "text",
  color: "secondary",
};

export const TextSuccessNavItem = Template.bind({});
TextSuccessNavItem.args = {
  variant: "text",
  color: "success",
};

export const TextErrorNavItem = Template.bind({});
TextErrorNavItem.args = {
  variant: "text",
  color: "error",
};

export const TextWarningNavItem = Template.bind({});
TextWarningNavItem.args = {
  variant: "text",
  color: "warning",
};

export const TextInfoNavItem = Template.bind({});
TextInfoNavItem.args = {
  variant: "text",
  color: "info",
};
