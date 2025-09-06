import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent", // полностью прозрачный
        boxShadow: "none",              // убираем тень
      }}
    >



      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        {/* Логотип */}
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          sx={{
            fontFamily: "Raleway, sans-serif",
            fontWeight: 700,
            letterSpacing: "0.5px",
            textDecoration: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            "&:hover": {
              color: "#A1C2FF",
            },
          }}
        >
          Myvision.School
        </Typography>

        {/* Навигация */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Link
            component={NavLink}
            to="/"
            underline="none"
            color="#FFFFFF"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "#2D2DFF",
                backgroundColor: "rgba(45,45,255,0.15)",
              },
            }}
          >
            Home
          </Link>
          <Link
            component={NavLink}
            to="/courses"
            underline="none"
            color="#FFFFFF"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "#2D2DFF",
                backgroundColor: "rgba(45,45,255,0.15)",
              },
            }}
          >
            Courses
          </Link>
          <Link
            component={NavLink}
            to="/teachers"
            underline="none"
            color="#FFFFFF"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "#2D2DFF",
                backgroundColor: "rgba(45,45,255,0.15)",
              },
            }}
          >
            Teachers
          </Link>
          <Link
            component={NavLink}
            to="/contacts"
            underline="none"
            color="#FFFFFF"
            sx={{
              px: 1.5,
              py: 0.7,
              borderRadius: "6px",
              transition: "0.3s",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 500,
              "&:hover": {
                color: "#2D2DFF",
                backgroundColor: "rgba(45,45,255,0.15)",
              },
            }}
          >
            Contact
          </Link>
        </Box>

        {/* Соцсети */}
        <Box>
          <IconButton color="inherit">
            <Facebook sx={{ color: "#A1C2FF" }} />
          </IconButton>
          <IconButton color="inherit">
            <Instagram sx={{ color: "#A1C2FF" }} />
          </IconButton>
          <IconButton color="inherit">
            <Twitter sx={{ color: "#A1C2FF" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
