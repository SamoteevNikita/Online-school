import { Box, Typography, Button, Grid, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import onlineGermanImage from "../assets/images/onlineGerman.avif";
import secondImage from "../assets/images/Untitled.avif";
import cardsImage from "../assets/images/Untitled.avif"; // Добавил, чтобы избежать повторного использования
import sourceImage from "../assets/images/source.png"; // картинка, которую ты загрузил
import SeoBlock from "../components/seoBlock";
import founderImage from "../assets/images/seoImage.png";
import nativeImage from "../assets/images/Native.JPG";



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
                maxWidth: 200,
                height: "auto",
                borderRadius: "20px",
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
              Індивідуальні заняття онлайн. <br />
              Пробний перший урок — перевірка вашого наявного рівня мови та
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
                Твій персональний план навчання німецькій
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
                Твій персональний план вивчення німецької.

                Ми навчаємо німецької мови з урахуванням саме твоїх цілей і темпу.
                Твій рівень, запити та зручний графік — усе враховано.
                Наш формат — постійна взаємодія «студент — викладач», живе спілкування та реальні результати.

                Після навчання ти зможеш упевнено складати іспити, працювати чи навчатися в Європі, розширювати свої можливості та горизонти.


                Звʼязок з менеджером 
                Дізнатися більше
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
                  Зв'язатися з менеджером
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
                  Дізнатись більше
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
              Групове навчання — Живе спілкування
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "1rem" }}>
              У групі ти постійно чуєш німецьку від інших студентів і поступово 
              починаєш думати нею сам. Це чудовий спосіб подолати мовний бар’єр,
               розвинути впевненість і звикнути говорити спонтанно. Живе спілкування — найкраща практика!
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
              Індивідуальні уроки — Твій темп і комфорт
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "1rem" }}>
              Тут у центрі — ти. Викладач підлаштовує матеріал, темп і завдання саме під тебе. Без поспіху, без тиску —
              лише впевнене просування до мети. Ідеальний варіант для тих, хто цінує спокій та ефективність.
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
              Подача матеріалу
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
                Групові заняття — Мотивація разом
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, fontSize: "1rem" }}
              >
                Навчання в команді — це енергія, підтримка й здорове суперництво. Коли бачиш успіхи інших, з’являється бажання ставати кращим. 
                Разом простіше тримати темп, не втрачати інтерес і насолоджуватись процесом вивчення німецької.
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
                Індивідуальне навчання — Максимум результату
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.8, fontSize: "1rem" }}
              >
                Кожен урок — це персональна стратегія успіху. Викладач допоможе зосередитись на слабких сторонах, розвинути вимову, 
                граматику й розмовні навички. Такий формат дає швидкі й відчутні результати вже після кількох занять.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Блок 1 — Основатель */}
        <SeoBlock
          title="Основатель школы"
          name="Никита Войтюк"
          description="Тут буде короткий опис про нього — ким він є, як заснував школу, який має досвід викладання німецької мови та як допомагає студентам."
          image={founderImage}
        />

        {/* Блок 2 — Носитель языка */}
        <SeoBlock
          reverse
          title="Native Speaker"
          name="Blblabla"
          description="Тут буде короткий опис про носія мови — як він допомагає студентам опанувати справжню розмовну німецьку."
          image={nativeImage}
        />

      </Container>

      {/* 🔹 Финальный CTA блок */}
      <Box
        sx={{
          mt: 12,
          py: 10,
          px: 4,
          textAlign: "center",
          borderRadius: "32px",
          background: "linear-gradient(135deg, rgba(45,45,255,0.3), rgba(150,191,255,0.2))",
          backdropFilter: "blur(10px)",
          color: "white",
          boxShadow: 6,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          sx={{
            fontFamily: "Raleway, sans-serif",
            mb: 3,
          }}
        >
          Зроби перший крок до вільної німецької сьогодні 🇩🇪
        </Typography>

        <Typography
          variant="h6"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 5,
            color: "rgba(255,255,255,0.85)",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.6,
          }}
        >
          Не чекай “ідеального моменту” — почни з пробного уроку вже зараз.  
          Переконайся, що навчання може бути легким, цікавим і саме твоїм стилем.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <Button
            component={Link}
            to="/contacts"
            variant="contained"
            sx={{
              bgcolor: "#2D2DFF",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              "&:hover": { bgcolor: "#96bfff" },
            }}
          >
            Записатись на пробний урок
          </Button>

          <Button
            component={Link}
            to="/courses"
            variant="outlined"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              borderColor: "#A1C2FF",
              color: "#A1C2FF",
              fontSize: "1.1rem",
              "&:hover": {
                bgcolor: "rgba(161,194,255,0.15)",
                borderColor: "#2D2DFF",
                color: "#2D2DFF",
              },
            }}
          >
            Дізнатись про курси
          </Button>
        </Box>
      </Box>

    </Box>
  );
}

export default HomePage;
