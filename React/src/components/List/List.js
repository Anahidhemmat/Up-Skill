import React from "react";
import { Box, List } from "@mui/material";
import { bgcolor } from "@mui/system";
import ListItemComponent from "./ListItem";

const ListComponent = ({ width, children, bgcolor }) => {
  return (
    <Box width={width} bgcolor={bgcolor}>
      <List>{children}</List>
    </Box>
  );
};

export default ListComponent;
