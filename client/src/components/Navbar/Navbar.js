import React from "react";
import NavItem from "../NavItem/NavItem";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import PropTypes from "prop-types";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const NavbarComponent = ({ color = "inherit", logo = "POKEMON APP" }) => {
  return (
    <div>
      <AppBar position="static" color={color}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {logo}
          </Typography>
          <Stack direction="row" spacing={2}></Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavbarComponent.propTypes = {
  color: PropTypes.oneOf([
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ]),
};

export default NavbarComponent;
