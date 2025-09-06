import React from 'react';
import Slider from "../components/Slider"; // Убедитесь, что путь к файлу верный

function CoursesPage() {

  return (
    <main style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Наши курсы</h1>
      <Slider />
    </main>
  );
}

export default CoursesPage;