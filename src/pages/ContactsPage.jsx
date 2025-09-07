import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { Phone, Email, WhatsApp, LocationOn } from "@mui/icons-material";

function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Введите email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Форма отправлена:", formData);

    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Заголовок */}
      <Typography
        variant="h3"
        component="h1"
        fontWeight="bold"
        gutterBottom
        sx={{
          color: "white",
          fontFamily: "Raleway, sans-serif",
          mb: 4,
        }}
      >
        Contact us
      </Typography>

      {/* Основной контейнер */}
      <Paper
        elevation={6}
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 4,
          maxWidth: 1000,
          width: "100%",
          p: 6,
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          color: "white",
        }}
      >
        {/* Левая часть: форма */}
        <Box
          sx={{
            borderRadius: "16px",
            backdropFilter: "blur(1px)",
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
          <Typography
            variant="subtitle2"
            sx={{ color: "#aaa", fontWeight: 500 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 3 }}
          >
            Get In Touch
          </Typography>

          {/* форма */}
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            {/* Name */}
            <TextField
              placeholder="Your Name..."
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name || ""}
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#777" },
                  "&.Mui-focused fieldset": { borderColor: "#bbb" },
                },
                input: { color: "#fff" },
              }}
            />

            {/* Email */}
            <TextField
              placeholder="example@yourmail.com"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email || ""}
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#777" },
                  "&.Mui-focused fieldset": { borderColor: "#bbb" },
                },
                input: { color: "#fff" },
              }}
            />

            {/* Subject */}
            <TextField
              placeholder="Title..."
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#777" },
                  "&.Mui-focused fieldset": { borderColor: "#bbb" },
                },
                input: { color: "#fff" },
              }}
            />

            {/* Message */}
            <TextField
              placeholder="Type Here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              InputProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#444" },
                  "&:hover fieldset": { borderColor: "#777" },
                  "&.Mui-focused fieldset": { borderColor: "#bbb" },
                },
                textarea: { color: "#fff" },
              }}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                py: 1.2,
                borderRadius: "30px",
                fontWeight: "bold",
                border: "1px solid #555",
                backgroundColor: "transparent",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#2d2dff",
                  borderColor: "#2d2dff",
                },
              }}
            >
              Send Now
            </Button>
          </form>
        </Box>

        {/* Правая часть: контакты + карта */}
        <Box
          sx={{
            borderRadius: "16px",
            backdropFilter: "blur(1px)",
            p: 3,
            color: "white",
            textAlign: "center",
            minHeight: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ mb: 2 }}
          >
            Contact Info
          </Typography>

          {/* Контакты в 2 колонки */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 3,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Box>
              <Phone sx={{ fontSize: 32, mb: 1 }} />
              <Typography variant="body1">+6022 4002 567</Typography>
            </Box>

            <Box>
              <Email sx={{ fontSize: 32, mb: 1 }} />
              <Typography variant="body1">Example@Email.Com</Typography>
            </Box>

            <Box>
              <WhatsApp sx={{ fontSize: 32, mb: 1 }} />
              <Typography variant="body1">(082) 245-3253</Typography>
            </Box>

            <Box>
              <LocationOn sx={{ fontSize: 32, mb: 1 }} />
              <Typography variant="body1">
                2443 Oak Ridge Omaha, GA 45065
              </Typography>
            </Box>
          </Box>

          {/* Карта */}
          <Box sx={{ mt: 2, width: "100%", borderRadius: "12px", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.4603586211!2d-96.0405829!3d41.252363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938e6e1e3c9bfb%3A0x79b5daebcfa56f!2sOmaha%2C%20NE%2C%20USA!5e0!3m2!1sen!2s!4v1691170012345"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default ContactsPage;
