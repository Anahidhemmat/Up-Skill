import React from "react";
import { TextField, Stack } from "@mui/material";

const TextFieldComponent = ({ label, variant, size, type, placeholder }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      size={size}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default TextFieldComponent;
