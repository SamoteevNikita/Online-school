import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={1}
      sx={{ borderBottom: "1px solid #eee" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            fontFamily: "'Roboto', 'Arial', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.5px",
            textDecoration: "none",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          Bright School
        </Typography>

        
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link
            component={NavLink}
            to="/"
            underline="none"
            color="inherit"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "white",
                backgroundColor: "green",
              },
            }}
          >
            Home
          </Link>

          <Link
            component={NavLink}
            to="/courses"
            underline="none"
            color="inherit"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "white",
                backgroundColor: "green",
              },
            }}
            >
            Courses
          </Link>

          <Link
            component={NavLink}
            to="/teachers"
            underline="none"
            color="inherit"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "white",
                backgroundColor: "green",
              },
            }}
          >
            Teachers
          </Link>

          <Link
            component={NavLink}
            to="/contacts"
            underline="none"
            color="inherit"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "'Roboto', 'Arial', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "white",
                backgroundColor: "green",
              },
            }}
          >
            Contact
          </Link>
        </Box>

       
        <Box>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;