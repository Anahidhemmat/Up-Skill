import React from "react";
import { TextField, Stack } from "@mui/material";

const TextFieldComponent = ({ label, variant }) => {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label={label} variant={variant} />
      </Stack>
    </Stack>
  );
};

export default TextFieldComponent;
