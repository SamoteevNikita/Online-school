import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";
import onlineGermanImage from "../assets/images/onlineGerman.avif";
import secondImage from "../assets/images/Untitled.avif";

function HomePage() {
  return (
    <Box sx={{ py: 8, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
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
              sx={{ color: "#1a1a1a" }}
            >
              Твой персональный план обучения немецкому
            </Typography>

            <Typography
              variant="body1"
              sx={{ mt: 2, color: "#555", lineHeight: 1.8 }}
            >
              Мы не записываем тебя на уже существующий курс, мы подбираем
              программу вплоть до конкретного урока по твоему личному запросу,
              исходя из твоих собственных потребностей, проводим курсы онлайн в
              обычном браузере, в удобное время, в индивидуальном темпе. Наши
              преподаватели всегда на связи с оперативным и объективным
              фидбэком.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mt: 4, mb: 4 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "green",
                  px: 3,
                  py: 1.5,
                  borderRadius: "30px",
                  "&:hover": { bgcolor: "darkgreen" },
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
                  borderColor: "green",
                  color: "green",
                  "&:hover": {
                    bgcolor: "rgba(0,128,0,0.05)",
                    borderColor: "darkgreen",
                    color: "darkgreen",
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
      </Container>
    </Box>
  );
}

export default HomePage;
