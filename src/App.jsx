import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import CoursesPage from "./pages/CoursesPage";
import TeachersPage from "./pages/TeachersPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      </Layout>
    </Router>
  )
}

export default App;