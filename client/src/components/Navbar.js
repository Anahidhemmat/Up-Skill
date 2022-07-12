import React from "react";
import NavItem from "./NavItem";
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const NavbarComponent = () => {
  return (
    <div>
      <AppBar position="static">
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
            POKEMON APP
          </Typography>
          <Stack direction="row" spacing={2}>
            <NavItem name="Home" href="#" color="inherit" variant="text" />
            <NavItem name="About" href="#" color="inherit" variant="text" />
            <NavItem name="Pricing" href="#" color="inherit" variant="text" />
            <NavItem name="Login" href="#" color="inherit" variant="text" />
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarComponent;
