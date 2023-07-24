import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h5" component="p">
            Bank Of React
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
