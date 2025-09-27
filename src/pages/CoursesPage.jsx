import React from "react";
import Slider from "../components/Slider";
import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PricesSlider from "../components/PricesSlider";


function CoursesPage() {
  const advantages = [
    {
      id: 1,
      title: "Курс-конструктор",
      text: "С помощью тестирования и анкетирования мы подбираем курс-конструктор под индивидуальный запрос. Курсы оплачиваются как месячный абонемент с максимальным количеством занятий.",
    },
    {
      id: 2,
      title: "Личные цели",
      text: "Индивидуальная программа закрывает личные цели: разговорная или грамматическая практика, понимание носителей языка на слух, поиск работы. С функцией записи голоса студенты тренируют разговорный язык.",
    },
    {
      id: 3,
      title: "Контакт с преподавателем",
      text: "Студенты во время занятий находятся в постоянном контакте с преподавателем — через текстовые и голосовые сообщения. Мы даем живую обратную связь каждому лично.",
    },
    {
      id: 4,
      title: "Гибкий график",
      text: "Занятия в нашей школе полностью индивидуальны и адаптированы под каждого студента. Погружаться в курс можно в любое время в комфортном ритме, без дополнительных расходов на рабочие тетради и приложения.",
    },
  ];

  const extraAdvantages = [
    "Сучасні та перевірені методики навчання — отримуйте знання з використанням найкращих підходів!",
    "Онлайн-формат — займаємось із будь-якої точки світу, де вам зручно!",
    "Перший урок безкоштовний: разом пройдемо тестування та познайомимось зі школою.",
    "Гнучкий графік і зручний темп — ви навчаєтесь у своєму ритмі.",
    "Обирайте, що вам до душі: групові чи індивідуальні заняття.",
    "Від першого заняття — живе спілкування та практика мови.",
    "Готуємо до іспитів, співбесід і навіть навчання за кордоном!",
    "Наші викладачі завжди поруч — підтримка й дружня атмосфера гарантовані.",
    "І найцікавіше: досягнувши певного рівня, ви зможете навчатись з носієм мови!",
  ];

  return (
    <main style={{ padding: "20px" }}>
      {/* Заголовок и слайдер */}
      <Typography variant="h3" align="center" gutterBottom>
        Наши курсы
      </Typography>
      <Slider />

      {/* Карточки преимуществ */}
      <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Наши преимущества
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, mb: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {advantages.map((adv) => (
            <Grid item xs={12} sm={6} md={3} key={adv.id}>
              <Paper
                elevation={4}
                sx={{
                  maxWidth: 280,
                  minHeight: 220,
                  p: 3,
                  borderRadius: "16px",
                  background: "transparent",
                  color: "white",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {adv.title}
                </Typography>
                <Typography variant="body2">{adv.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Слайдер цен */}
      <Box sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Наши расценки
        </Typography>
        <PricesSlider />
      </Box>

      {/* Блок со ⭐ списком */}
      <Box sx={{ maxWidth: 800, mx: "auto", mt: 4 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Чому саме ми?
        </Typography>
        <List>
          {extraAdvantages.map((item, index) => (
            <ListItem key={index} sx={{ alignItems: "flex-start" }}>
              <ListItemIcon>
                <StarIcon sx={{ color: "#FFD700" }} />
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
    </main>
  );
}

export default CoursesPage;
