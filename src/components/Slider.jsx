import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Slider() {
  const slider = [
    {
      id: 1,
      title: "Учим немецкий за пол года",
      text: "Изучай немецкий по нашей уникальной методике. От нулевого уровня до уверенного общения за 6 месяцев!",
      image: "/src/assets/images/Untitled.avif",
    },
    {
      id: 2,
      title: "Хочешь знать язык как профи?",
      text: "Наши преподаватели — носители языка, которые помогут тебе освоить не только грамматику, но и живую разговорную речь.",
      image: "/src/assets/images/Untitled.avif",
    },
    {
      id: 3,
      title: "У тебя всё получится!",
      text: "Мы подберём программу обучения, которая идеально подходит под твой график и цели. Учись в удобном темпе из любой точки мира.",
      image: "/src/assets/images/Untitled.avif",
    },
    {
      id: 4,
      title: "Перебори свой страх",
      text: "Стесняешься говорить? Мы создаём комфортную и дружелюбную атмосферу, чтобы ты мог практиковаться без стресса.",
      image: "/src/assets/images/Untitled.avif",
    },
    {
      id: 5,
      title: "Ничего не выходит без труда!",
      text: "Занятия онлайн с индивидуальным подходом. Мы поможем тебе дойти до результата, какой бы сложной ни была твоя цель.",
      image: "/src/assets/images/Untitled.avif",
    },
  ];

  return (
    <div style={{ maxWidth: "1500px", margin: "40px auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ borderRadius: "12px" }}
      >
        {slider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                height: "700px",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#1A1A40",
                color: "#FFFFFF",
              }}
            >
              
              <div
                style={{
                  flex: 1,
                  padding: "40px",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    margin: 0,
                    fontFamily: "Raleway, sans-serif",
                    color: "#A1C2FF", 
                  }}
                >
                  {slide.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.2rem",
                    margin: "15px 0 0",
                    fontFamily: "Inter, sans-serif",
                    color: "#FFFFFF",
                  }}
                >
                  {slide.text}
                </p>
              </div>

              
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: "100%",
                    maxWidth: "600px", 
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "12px",
                    border: "3px solid #2D2DFF",
                  }}
                />
              </div>




            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
