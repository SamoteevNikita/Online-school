import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Link,
  Paper,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "",
    telegramUsername: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendFormData = async (data) => {
    try {
      console.log("📤 Відправка даних:", data);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        contactMethod: "",
        telegramUsername: "",
      });
    } catch (error) {
      console.error("❌ Помилка при відправці форми:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData(formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        p: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Paper
        elevation={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "40px",
          backgroundColor: "rgba(20, 20, 60, 0.4)",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
          width: { xs: "100%", sm: "90%", md: "1000px" },
          p: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "36px", sm: "48px", md: "72px", lg: "90px" },
            fontWeight: 700,
            letterSpacing: 2,
            mb: { xs: 4, md: 6 },
            textAlign: "center",
          }}
        >
          Залишайся на зв'язку
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: 900,
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 5 },
          }}
        >
          <TextField
            variant="standard"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            InputProps={{
              disableUnderline: false,
              sx: {
                color: "white",
                fontSize: "25px",
                borderBottom: "1px solid #444",
                "&:hover": { borderBottom: "1px solid #888" },
                "&:focus-within": { borderBottom: "1px solid white" },
              },
            }}
            fullWidth
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
            }}
          >
            {["email", "phone"].map((field) => (
              <TextField
                key={field}
                variant="standard"
                name={field}
                placeholder={field === "email" ? "E-mail" : "Phone"}
                value={formData[field]}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: false,
                  sx: {
                    color: "white",
                    fontSize: "25px",
                    borderBottom: "1px solid #444",
                    "&:hover": { borderBottom: "1px solid #888" },
                    "&:focus-within": { borderBottom: "1px solid white" },
                  },
                }}
                fullWidth
              />
            ))}
          </Box>

          <TextField
            variant="standard"
            name="message"
            placeholder="Message"
            multiline
            minRows={1}
            value={formData.message}
            onChange={handleChange}
            InputProps={{
              disableUnderline: false,
              sx: {
                color: "white",
                fontSize: "25px",
                borderBottom: "1px solid #444",
                "&:hover": { borderBottom: "1px solid #888" },
                "&:focus-within": { borderBottom: "1px solid white" },
              },
            }}
            fullWidth
          />

          <Typography
            sx={{
              color: "#ccc",
              fontSize: "16px",
              mt: 4,
              mb: 1,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Яким способом з вами буде зручніше зв’язатися?
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 3,
            }}
          >
            {["Telegram", "Viber"].map((option) => (
              <Box
                key={option}
                component="button"
                type="button"
                onClick={() =>
                  setFormData({ ...formData, contactMethod: option })
                }
                style={{
                  backgroundColor:
                    formData.contactMethod === option ? "#fff" : "transparent",
                  color: formData.contactMethod === option ? "#000" : "#fff",
                  border: "1px solid #888",
                  borderRadius: "30px",
                  padding: "12px 28px",
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
              >
                {option}
              </Box>
            ))}
          </Box>

          {formData.contactMethod === "Telegram" && (
            <TextField
              variant="standard"
              name="telegramUsername"
              placeholder="@username"
              value={formData.telegramUsername || ""}
              onChange={handleChange}
              InputProps={{
                disableUnderline: false,
                sx: {
                  color: "white",
                  fontSize: "16px",
                  borderBottom: "1px solid #444",
                  mt: 2,
                  "&:hover": { borderBottom: "1px solid #888" },
                  "&:focus-within": { borderBottom: "1px solid white" },
                },
              }}
              fullWidth
            />
          )}

          <IconButton
            type="submit"
            sx={{
              alignSelf: "flex-start",
              color: "white",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translateX(6px)" },
            }}
          >
            <ArrowForwardIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* Блок соцсетей */}
        <Box sx={{ mt: { xs: 6, md: 10 }, textAlign: "center" }}>
          <Typography sx={{ color: "#aaa", mb: 1, fontSize: 14 }}>
            Hate contact forms? Me too —{" "}
            <Link
              href="mailto:Ourlink@gmail.com"
              underline="hover"
              sx={{ color: "#fff" }}
            >
              Ourlink@gmail.com
            </Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 3,
              mt: 2,
            }}
          >
            <Link
              href="https://www.instagram.com/myvision.school/"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                fontSize: "18px",
                transition: "color 0.3s ease",
                "&:hover": { color: "#A1C2FF" },
              }}
            >
              Instagram
            </Link>
            <Link
              href="https://www.tiktok.com/@myvision.school"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#fff",
                fontSize: "18px",
                transition: "color 0.3s ease",
                "&:hover": { color: "#A1C2FF" },
              }}
            >
              TikTok
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ContactsPage;
