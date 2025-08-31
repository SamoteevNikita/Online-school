import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "10px", background: "#eee" }}>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/">Главная</Link>
        <Link to="/courses">Курсы</Link>
        <Link to="/teachers">Преподаватели</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}

export default Header;
