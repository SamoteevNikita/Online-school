import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu, Close, Instagram } from "@mui/icons-material";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // 👈 иконка TikTok (аналог)
import { NavLink } from "react-router-dom";

function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Courses", path: "/courses" },
    { label: "Contact", path: "/contacts" },
  ];

  // 🔹 Обработчики кликов по иконкам соцсетей
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/myvision.school/", "_blank");
  };

  const handleTikTokClick = () => {
    window.open("https://www.tiktok.com/@myvision.school", "_blank");
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "rgba(0,0,20,0.9)",
        height: "100%",
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ color: "#A1C2FF" }}>
          Myvision.School
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close sx={{ color: "#A1C2FF" }} />
        </IconButton>
      </Box>

      <List>
        {navLinks.map((item) => (
          <ListItem
            key={item.path}
            component={NavLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              textDecoration: "none",
              color: "#FFFFFF",
              "&.active": { color: "#2D2DFF" },
              "&:hover": { color: "#2D2DFF" },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      {/* Соцсети в Drawer (мобильный) */}
      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <IconButton onClick={handleInstagramClick}>
          <Instagram sx={{ color: "#A1C2FF" }} />
        </IconButton>
        <IconButton onClick={handleTikTokClick}>
          <MusicNoteIcon sx={{ color: "#A1C2FF" }} />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* ЛОГОТИП */}
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

        {/* НАВИГАЦИЯ (Desktop) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 3,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.path}
              component={NavLink}
              to={item.path}
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
              {item.label}
            </Link>
          ))}
        </Box>

        {/* СОЦСЕТИ (Desktop) */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <IconButton onClick={handleInstagramClick}>
            <Instagram sx={{ color: "#A1C2FF" }} />
          </IconButton>
          <IconButton onClick={handleTikTokClick}>
            <MusicNoteIcon sx={{ color: "#A1C2FF" }} />
          </IconButton>
        </Box>

        {/* БУРГЕР (Mobile) */}
        <IconButton
          sx={{ display: { xs: "flex", md: "none" }, color: "#A1C2FF" }}
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
      </Toolbar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // улучшает анимацию
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Header;
