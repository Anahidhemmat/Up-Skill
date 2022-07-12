import React from "react";
import { Box, List } from "@mui/material";
import { bgcolor } from "@mui/system";
import ListItemComponent from "./ListItem";

const ListComponent = (props) => {
  return (
    <Box width={props.width} bgcolor={props.bgcolor}>
      <List>{props.children}</List>
    </Box>
  );
};

export default ListComponent;
