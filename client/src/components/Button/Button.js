import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const ButtonComponent = ({ variant, type, color, children }) => {
  return (
    <div>
      <Button type={type} variant={variant} color={color}>
        {children}
      </Button>
    </div>
  );
};

ButtonComponent.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
};

export default ButtonComponent;
