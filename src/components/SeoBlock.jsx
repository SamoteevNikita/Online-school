import React from "react";
import { Box, Typography } from "@mui/material";
import seoImage from "../assets/images/seoImage.png";

function SeoBlock({ reverse = false, title, name, description, image = seoImage }) {
  return (
    <Box
      sx={{
        mt: 10,
        mb: 10,
        display: "flex",
        flexDirection: { xs: "column", md: reverse ? "row-reverse" : "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 8 },
        p: { xs: 3, md: 6 },
        borderRadius: "24px",
        backdropFilter: "blur(12px)",
        color: "white",
      }}
    >
      {/* Картинка */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "90%", sm: "80%", md: "420px", lg: "480px" },
          height: "auto",
          borderRadius: "20px",
          objectFit: "cover",
          boxShadow: 4,
          transition: "all 0.3s ease",
        }}
      />

      {/* Текстовый блок */}
      <Box
        sx={{
          textAlign: { xs: "center", md: reverse ? "right" : "left" },
          maxWidth: { xs: "100%", md: 500 },
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" } }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" }, lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default SeoBlock;
