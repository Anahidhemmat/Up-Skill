import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import PropTypes from "prop-types";

const ListItemComponent = ({ primary, secondary, color }) => {
  return (
    <Stack>
      <ListItem>
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary={primary} secondary={secondary} color={color} />
      </ListItem>
      <Divider />
    </Stack>
  );
};

export default ListItemComponent;
