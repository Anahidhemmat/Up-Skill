import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const ButtonComponent = ({ text, variant, type, color }) => {
  return (
    <div>
      <Button type={type} variant={variant} color={color}>
        {text}
      </Button>
    </div>
  );
};

// ButtonComponent.PropTypes = {
//   text: PropTypes.string,
//   variant: PropTypes.string,
//   type: PropTypes.string,
//   color: PropTypes.string,
// };

export default ButtonComponent;
