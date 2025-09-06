import { Box, Typography, Button, Grid, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import onlineGermanImage from "../assets/images/onlineGerman.avif";
import secondImage from "../assets/images/Untitled.avif";

function HomePage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Paper
          elevation={6}
          sx={{
            p: 6,
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.1)", 
            backdropFilter: "blur(12px)", 
            color: "white",
          }}
        >
          <Grid
            container
            spacing={6}
            alignItems="center"
            justifyContent="center"
          >
            
            <Grid item xs={12} md={6} order={{ xs: 1, md: 1 }}>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                gutterBottom
                sx={{ color: "white", fontFamily: "Raleway, sans-serif" }}
              >
                Твой персональный план обучения немецкому
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  color: "#FFFFFF",
                  lineHeight: 1.8,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Мы не записываем тебя на уже существующий курс...
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 4, mb: 4 }}>
                <Button
                  component={Link}
                  to="/contacts"
                  variant="contained"
                  sx={{
                    bgcolor: "#2D2DFF",
                    borderRadius: "30px",
                    px: 3,
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "#96bfff",
                    },
                  }}
                >
                  Связаться с менеджером
                </Button>


                <Button
                  component={Link}
                  to="/courses"
                  variant="outlined"
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderRadius: "30px",
                    borderColor: "#A1C2FF",
                    color: "#A1C2FF",
                    "&:hover": {
                      bgcolor: "rgba(161,194,255,0.15)",
                      borderColor: "#2D2DFF",
                      color: "#2D2DFF",
                    },
                  }}
                >
                  Узнать больше
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Box
                  component="img"
                  src={onlineGermanImage}
                  alt="Students learning German"
                  sx={{
                    width: "50%",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: 3,
                  }}
                />
                <Box
                  component="img"
                  src={secondImage}
                  alt="Second illustration"
                  sx={{
                    width: "50%",
                    height: "auto",
                    borderRadius: "16px",
                    boxShadow: 3,
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6} order={{ xs: 2, md: 2 }} />
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default HomePage;
