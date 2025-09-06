import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import TeachersPage from "./pages/TeachersPage";
import ContactsPage from "./pages/ContactsPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
