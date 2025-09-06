import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

function Layout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "transparent", 
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "transparent" }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default Layout;

