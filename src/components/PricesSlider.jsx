import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Box, Typography, Button, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom"; // <- обязательно импортируем

const plans = [
  {
    title: "Рівень A0-B1",
    features: [
      "Індивідуальне заняття: 9€ / 14€ з носієм мови",
      "Групове заняття: 5€ / 9€ з носієм",
    ],
  },
  {
    title: "Підготовка до іспиту B1",
    features: [
      "Індивідуальне заняття: 14€ / 16€ з носієм мови",
      "Групове заняття: 8€ / 10€ з носієм мови",
    ],
  },
  {
    title: "Рівень B2-C1",
    features: [
      "Індивідуальне заняття: 12€ / 16€ з носієм мови",
      "Групове заняття: 7€ / 10€ з носієм",
    ],
  },
  {
    title: "Підготовка до іспиту B2-C1",
    features: [
      "Індивідуальне заняття: 16€ / 20€ з носієм мови",
      "Групове заняття: 10€ / 13€ з носієм мови",
    ],
  },
];

const PricesSlider = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", mt: 5 }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        style={{ padding: "30px 0" }}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                backdropFilter: "blur(8px)",
                p: 4,
                color: "white",
                textAlign: "center",
                minHeight: 280,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "scale(1.05)", boxShadow: 8 },
              }}
            >
              <Box>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                  {plan.title}
                </Typography>
                <List sx={{ textAlign: "left" }}>
                  {plan.features.map((feat, i) => (
                    <ListItem key={i} sx={{ fontSize: "1.0rem", px: 0, lineHeight: 1.4 }}>
                      • {feat}
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Button
                component={Link}
                to="/contacts"
                variant="contained"
                sx={{
                  mt: 2,
                  background: "linear-gradient(45deg, #FFD700, #FFA500)",
                  color: "#000",
                  fontWeight: "bold",
                  borderRadius: "12px",
                  "&:hover": {
                    background: "linear-gradient(45deg, #FFA500, #FFD700)",
                  },
                }}
              >
                Записатися
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PricesSlider;
