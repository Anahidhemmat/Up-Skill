import React from "react";
import NavItem from "./NavItem";
import { AppBar, ToolBar, IconButton, Typography } from "@mui/material";
import CatchingPokemonIcon from "mui/icons-material/CatchingPokemon";

const NavbarComponent = () => {
  return (
    <div>
      <AppBar position="static">
        <toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6">POKEMON APP</Typography>
        </toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarComponent;
