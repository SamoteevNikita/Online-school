import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    fontSize: "18px",
    color: isActive ? "green" : "black",
    fontWeight: isActive ? "bold" : "normal",
    borderBottom: isActive ? "2px solid green" : "2px solid transparent",
    paddingBottom: "2px",
    transition: "all 0.3s ease",
  });

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
          sx={{
            fontFamily: "cursive",
            fontWeight: "bold",
            fontSize: "22px",
          }}
        >
          Online German School
        </Typography>

        
        <Box sx={{ display: "flex", gap: 3 }}>
          <NavLink to="/" style={navLinkStyle}>
            {({ isActive }) => (
              <span
                style={{
                  color: isActive ? "green" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive
                    ? "2px solid green"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "green";
                  e.target.style.borderBottom = "2px solid green";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = "black";
                    e.target.style.borderBottom = "2px solid transparent";
                  }
                }}
              >
                Home
              </span>
            )}
          </NavLink>

          <NavLink to="/courses" style={navLinkStyle}>
            {({ isActive }) => (
              <span
                style={{
                  color: isActive ? "green" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive
                    ? "2px solid green"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "green";
                  e.target.style.borderBottom = "2px solid green";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = "black";
                    e.target.style.borderBottom = "2px solid transparent";
                  }
                }}
              >
                Courses
              </span>
            )}
          </NavLink>

          <NavLink to="/teachers" style={navLinkStyle}>
            {({ isActive }) => (
              <span
                style={{
                  color: isActive ? "green" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive
                    ? "2px solid green"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "green";
                  e.target.style.borderBottom = "2px solid green";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = "black";
                    e.target.style.borderBottom = "2px solid transparent";
                  }
                }}
              >
                Teachers Page
              </span>
            )}
          </NavLink>

          <NavLink to="/contacts" style={navLinkStyle}>
            {({ isActive }) => (
              <span
                style={{
                  color: isActive ? "green" : "black",
                  fontWeight: isActive ? "bold" : "normal",
                  borderBottom: isActive
                    ? "2px solid green"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "green";
                  e.target.style.borderBottom = "2px solid green";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = "black";
                    e.target.style.borderBottom = "2px solid transparent";
                  }
                }}
              >
                Contact
              </span>
            )}
          </NavLink>
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
