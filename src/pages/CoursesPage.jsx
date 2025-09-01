function CoursesPage() {
  const courses = [
    { id: 1, title: "Немецкий A1 — для начинающих" },
    { id: 2, title: "Немецкий A2 — базовый уровень" },
    { id: 3, title: "Немецкий B1 — разговорная практика" },
    { id: 4, title: "Немецкий B2 — для учёбы и работы" },
    { id: 5, title: "Немецкий C1 — продвинутый" },
  ];

  return (
    <main style={{ padding: "20px" }}>
      <h1>Наши курсы</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default CoursesPage;
