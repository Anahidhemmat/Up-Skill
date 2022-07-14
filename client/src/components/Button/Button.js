import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const ButtonComponent = ({ variant, type, color, onClick, children, size }) => {
  return (
    <div>
      <Button
        type={type}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
};

ButtonComponent.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonComponent;
