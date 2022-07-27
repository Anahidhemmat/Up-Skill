import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ButtonComponent from "../Button/Button";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box flexGrow={1}>Logo</Box>
        <ButtonComponent type="button" variant="text">
          <MenuIcon />
        </ButtonComponent>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
