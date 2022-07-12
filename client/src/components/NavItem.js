import React from "react";
import { Button } from "@mui/material";
const NavItem = ({ name, href, variant, color }) => {
  return (
    <div>
      <Button href={href} variant={variant} color={color} text={name}>
        {name}
      </Button>
    </div>
  );
};

export default NavItem;
