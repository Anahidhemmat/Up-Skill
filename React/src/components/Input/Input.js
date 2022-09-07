import React from "react";
import { TextField, Stack } from "@mui/material";

const TextFieldComponent = ({
  label,
  variant,
  size,
  type,
  placeholder,
  onChange,
}) => {
  return (
    <TextField
      label={label}
      variant={variant}
      size={size}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default TextFieldComponent;
