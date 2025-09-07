import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(161, 194, 255, 0.15)", 
        backdropFilter: "blur(10px)",                 
        color: "#FFFFFF",
        textAlign: "center",
        p: 3,
        mt: "auto",
        borderTop: "1px solid rgba(255,255,255,0.2)", 
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        © {new Date().getFullYear()} Online German School. Все права защищены.
      </Typography>
    </Box>


  );
}

export default Footer;