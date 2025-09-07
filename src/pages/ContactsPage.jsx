import { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    if (!formData.message.trim()) {
      newErrors.message = "Введите сообщение";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Форма отправлена:", formData);

    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 420,
          width: "100%",
          borderRadius: 3,
          textAlign: "center",
          background: "rgba(255, 255, 255, 0.05)", // прозрачный
          backdropFilter: "blur(12px)", // эффект стекла
          color: "#FFFFFF",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}
        >
          Оставьте заявку нашему менеджеру
        </Typography>
        <Typography
          variant="body2"
          sx={{ mb: 3, opacity: 0.8, fontFamily: "Inter, sans-serif" }}
        >
          Напишите нам, и мы ответим в ближайшее время
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Имя"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.name}
            helperText={errors.name}
            InputLabelProps={{ style: { color: "#A1C2FF" } }}
            InputProps={{
              style: {
                color: "#fff",
                borderRadius: "8px",
              },
            }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.email}
            helperText={errors.email}
            InputLabelProps={{ style: { color: "#A1C2FF" } }}
            InputProps={{
              style: {
                color: "#fff",
                borderRadius: "8px",
              },
            }}
          />

          <TextField
            label="Сообщение"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            error={!!errors.message}
            helperText={errors.message}
            InputLabelProps={{ style: { color: "#A1C2FF" } }}
            InputProps={{
              style: {
                color: "#fff",
                borderRadius: "8px",
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: "8px",
              fontWeight: "bold",
              background:
                "linear-gradient(90deg, #2D2DFF, #6C63FF)", // градиент кнопки
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(90deg, #1F4099, #2D2DFF)",
              },
            }}
          >
            Отправить
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default ContactsPage;
