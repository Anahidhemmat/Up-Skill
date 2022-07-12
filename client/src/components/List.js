import React from "react";
import { Box, List } from "@mui/material";
import { bgcolor } from "@mui/system";
import ListItemComponent from "./ListItem";

const ListComponent = ({ width, bgcolor }) => {
  return (
    <Box width={width} bgcolor={bgcolor}>
      <List>
        <ListItemComponent primary="Item 1" />
      </List>
    </Box>
  );
};

export default ListComponent;
