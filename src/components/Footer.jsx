import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "grey.200", 
        color: "grey.800", 
        textAlign: "center",
        p: 2,
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Online German School. Все права защищены.
      </Typography>
    </Box>
  );
}

export default Footer;