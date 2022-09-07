import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const NavItem = ({ href, variant, color, children, icon, ...rest }) => {
  return (
    <div>
      <Button href={href} variant={variant} color={color} {...rest}>
        {icon}
        {children}
      </Button>
    </div>
  );
};

NavItem.propTypes = {
  variant: PropTypes.oneOf(["outlined", "contained", "text"]),
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
  href: PropTypes.string,
};
export default NavItem;
