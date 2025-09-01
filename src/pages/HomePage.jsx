import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Добро пожаловать в Online German School</h1>
      <p>
        Мы обучаем немецкому языку онлайн — от уровня A1 до C1. 
        Наши преподаватели — носители языка и сертифицированные специалисты.
      </p>

      <Link 
        to="/courses" 
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 20px",
          background: "#333",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Узнать больше
      </Link>
    </main>
  );
}

export default HomePage;
