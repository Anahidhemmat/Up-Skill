import React from "react";
import { TextField, Stack } from "@mui/material";

const TextFieldComponent = ({ label, variant, size, type, placeholder }) => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label={label}
          variant={variant}
          size={size}
          type={type}
          placeholder={placeholder}
        />
      </Stack>
    </Stack>
  );
};

export default TextFieldComponent;
