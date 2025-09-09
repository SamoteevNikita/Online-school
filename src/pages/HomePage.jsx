import { Box, Typography, Button, Grid, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import onlineGermanImage from "../assets/images/onlineGerman.avif";
import secondImage from "../assets/images/Untitled.avif";
import cardsImage from "../assets/images/Untitled.avif"; // Добавил, чтобы избежать повторного использования
import sourceImage from "../assets/images/source.png"; // картинка, которую ты загрузил

function HomePage() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* 🔹 Новый блок с картинкой и текстом */}
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          sx={{
            mb: 10, // отступ вниз
          }}
        >
          {/* Картинка */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={sourceImage}
              alt="MyVision School"
              sx={{
                maxWidth: 400,
                height: "auto",
                borderRadius: "20px",
                boxShadow: 4,
              }}
            />
          </Grid>

          {/* Текст */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              sx={{ color: "white", fontFamily: "Raleway, sans-serif", mb: 3 }}
            >
              MyVision School — німецька мова так, як зручно саме тобі.
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#FFFFFF",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.6,
              }}
            >
              Групові та індивідуальні заняття онлайн. <br />
              Безкоштовний перший урок — перевірка вашого наявного рівня мови та
              знайомство зі школою.
            </Typography>
          </Grid>
        </Grid>
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
                Мы обучаем немецкому языку с учетом всех пользовательских
                настроек - твоего уровня подготовки, твоих запросов, комфортного
                конкретно для тебя времени. Мы работаем в режиме постоянной
                коммуникации “студент - преподаватель”. А студенты, успешно
                сдавшие экзамены, реализуют свои первоначальные цели: успешное
                трудоустройство, адаптация в европейской среде, расширение
                социальных горизонтов.
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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 3,
            mt: 6,
          }}
        >
          {/* Карточка 1 */}
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(8px)",
              color: "white",
              textAlign: "center",
              minHeight: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden", // Чтобы изображение не выходило за края
            }}
          >
            <Box
              component="img"
              src={cardsImage}
              alt="Изображение для карточки"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </Box>

          {/* Карточка 2 */}
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(8px)",
              p: 3,
              color: "white",
              textAlign: "center",
              minHeight: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Групповое обучение
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "1rem" }}>
              Занимаясь в группе, студенты могут учиться не только на своих, но
              и на чужих ошибках, замечая, что и как исправляет преподаватель.
              Это помогает избежать типичных трудностей, когда приходит их
              очередь, а также перенимать удачные языковые приемы у других
              участников. Такой формат позволяет расслабиться и учиться,
              наблюдая за успехами других.
            </Typography>
          </Box>

          {/* Карточка 3 */}
          <Box
            sx={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(8px)",
              p: 3,
              color: "white",
              textAlign: "center",
              minHeight: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Индивидуальные уроки
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "1rem" }}>
              Индивидуальные занятия построены на твоих личных запросах, в
              комфортном темпе и графике. Преподаватель подберет под тебя темы
              разговоров, уровень сложности, в зависимости от твоих возможностей
              будет подобран словарный запас и сложность грамматики. Для
              максимальной пользы тебе будет необходимо раскрываться полностью.
            </Typography>
          </Box>
        </Box>
        <Paper
          elevation={6}
          sx={{
            mt: 10,
            p: 6,
            borderRadius: "24px",
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              gutterBottom
              sx={{ color: "white", fontFamily: "Raleway, sans-serif" }}
            >
              Подача материала
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 3,
              mt: 6,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                backdropFilter: "blur(8px)",
                p: 3,
                color: "white",
                textAlign: "center",
                minHeight: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Групповое обучение
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, fontSize: "1rem" }}
              >
                Занимаясь в группе, студенты могут учиться не только на своих,
                но и на чужих ошибках, замечая, что и как исправляет
                преподаватель. Это помогает избежать типичных трудностей, когда
                приходит их очередь, а также перенимать удачные языковые приемы
                у других участников. Такой формат позволяет расслабиться и
                учиться, наблюдая за успехами других.
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: "16px",
                backdropFilter: "blur(8px)",
                p: 3,
                color: "white",
                textAlign: "center",
                minHeight: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
                Групповое обучение
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, fontSize: "1rem" }}
              >
                Занимаясь в группе, студенты могут учиться не только на своих,
                но и на чужих ошибках, замечая, что и как исправляет
                преподаватель. Это помогает избежать типичных трудностей, когда
                приходит их очередь, а также перенимать удачные языковые приемы
                у других участников. Такой формат позволяет расслабиться и
                учиться, наблюдая за успехами других.
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* --- Як це працює? --- */}
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "Raleway, sans-serif", mb: 6, color: "white" }}
          >
            Як це працює?
          </Typography>

          <Grid container spacing={10} justifyContent="center">
            {/* Картка 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Free
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  <span role="img" aria-label="step1">
                    1️⃣
                  </span>{" "}
                  Записуєшся на безкоштовний пробний урок
                </Typography>
              </Box>
            </Grid>

            {/* Картка 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Тест
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  <span role="img" aria-label="step2">
                    2️⃣
                  </span>{" "}
                  Проходиш короткий тест і знайомишся зі школою
                </Typography>
              </Box>
            </Grid>

            {/* Картка 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  План
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  <span role="img" aria-label="step3">
                    3️⃣
                  </span>{" "}
                  Отримуєш рекомендації та план навчання
                </Typography>
              </Box>
            </Grid>

            {/* Картка 4 */}
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Start
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  <span role="img" aria-label="step4">
                    4️⃣
                  </span>{" "}
                  Починаєш шлях до впевненої німецької мови 🚀
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
