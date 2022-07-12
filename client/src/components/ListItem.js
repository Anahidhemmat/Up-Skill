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

const ListItemComponent = ({ primary, secondary }) => {
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
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
      <Divider />
    </Stack>
  );
};

export default ListItemComponent;
