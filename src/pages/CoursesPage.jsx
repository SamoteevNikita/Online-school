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
      text: "За допомогою тестування та анкетування ми підбираємо курс-конструктор під індивідуальний запит. Курси оплачуються як місячний абонемент з максимальною кількістю занять.",
    },
    {
      id: 2,
      title: "Особисті цілі",
      text: "Індивідуальна програма охоплює особисті цілі: розмовну або граматичну практику, розуміння носіїв мови на слух, пошук роботи. За допомогою функції запису голосу студенти тренують розмовну мову.",
    },
    {
      id: 3,
      title: "Контакт з викладачем",
      text: "Студенти під час занять перебувають у постійному контакті з викладачем — через текстові та голосові повідомлення. Ми надаємо живий зворотний зв'язок кожному особисто.",
    },
    {
      id: 4,
      title: "Гнучкий графік",
      text: "Заняття в нашій школі повністю індивідуальні та адаптовані під кожного студента. Починати курс можна в будь-який час у комфортному ритмі, без додаткових витрат на робочі зошити та додатки.",
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
      <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
        Наші курси
      </Typography>
      <Slider />

      {/* Карточки преимуществ */}
      <Box sx={{ textAlign: "center", mt: 6, mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight="bold">
          Наші переваги
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
                <Typography variant="h5" gutterBottom>
                  {adv.title}
                </Typography>
                <Typography variant="body3">{adv.text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Слайдер цен */}
      <Box sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Наші розцінки
        </Typography>
        <PricesSlider />
      </Box>

      {/* Блок "Чому саме ми?" */}
      <Box
        sx={{
          mt: 10,
          py: 6,
          px: 3,
          borderRadius: "24px",
          background: "transparent",
          color: "white",
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 4, textTransform: "uppercase", letterSpacing: "1px" }}
        >
          Чому саме ми?
        </Typography>
        <List>
          {extraAdvantages.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                alignItems: "flex-start",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": { transform: "translateX(6px)" },
              }}
            >
              <ListItemIcon>
                <StarIcon sx={{ color: "#FFD700", fontSize: 30 }} />
              </ListItemIcon>
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </main>
  );
}

export default CoursesPage;
