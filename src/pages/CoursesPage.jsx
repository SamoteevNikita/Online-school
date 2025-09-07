import React from 'react';
import Slider from "../components/Slider"; 
import { Box, Typography, Grid } from '@mui/material';

function CoursesPage() {
  const advantages = [
    {
      id: 1,
      title: "Курс-конструктор",
      text: "С помощью тестирования и анкетирования мы подбираем курс-конструктор под индивидуальный запрос. Курсы оплачиваются как месячный абонемент с максимальным количеством занятий",
    },
    {
      id: 2,
      title: "Личные цели",
      text: "Индивидуальная программа закрывает личные цели: разговорная или грамматическая практика, понимание носителей языка на слух, поиск работы. С функцией записи голоса студенты тренируют разговорный язык.",
    },
    {
      id: 3,
      title: "Контакт с преподавателем",
      text: "Студенты во время занятий находятся в постоянном контакте с преподавателем - с помощью текстовых и голосовых сообщений. Мы даем живую обратную связь каждому лично.",
    },
    {
      id: 4,
      title: "Гибкий график",
      text: "Занятия в нашей школе полностью индивидуальны и адаптированы под каждого студента. Погружаться в курс можно в любое время в комфортном ритме, без дополнительных расходов на рабочие тетради и приложения.",
    },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Наши курсы</h1>
      <Slider />

      {/* Заголовок */}
      <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Наши преимущества
        </Typography>
      </Box>

      {/* Блок преимуществ */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid 
        container 
        spacing={3}
         justifyContent="center" // выравнивание по центру
        
        >
          {advantages.map((adv) => (
            <Grid item xs={12} sm={6} md={3} key={adv.id}>
              <Box
                sx={{
                  maxWidth: 250,
                  minHeight: 220,
                  p: 3,
                  borderRadius: "16px",
                  boxShadow: 3,
                  backgroundColor: "transparent",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <Typography variant="h6" gutterBottom color="white">
                  {adv.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {adv.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </main>
  );
}

export default CoursesPage;
