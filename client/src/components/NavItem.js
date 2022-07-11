import React from "react";
import { Link } from "react-router-dom";
import { Link } from "@mui/material";

const NavItem = ({ name, path, href, variant, color }) => {
  return (
    <div>
      <Link to={path}>
        <Link href={href} variant={variant} color={color}>
          {name}
        </Link>
      </Link>
    </div>
  );
};

export default NavItem;
