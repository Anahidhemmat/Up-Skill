import React from "react";
import { Stack, Link } from "@mui/material";

const LinkComponent = ({
  children,
  href,
  color,
  underline,
  variant,
  ...rest
}) => {
  return (
    <Link
      href={href}
      color={color}
      underline={underline}
      variant={variant}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;
