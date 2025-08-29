import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/courses" element={<h1>Курсы</h1>} />
        <Route path="/teachers" element={<h1>Преподаватели</h1>} />
        <Route path="/contacts" element={<h1>Контакты</h1>} />
      </Routes>
    </Router>
  )
}

export default App;