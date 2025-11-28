import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

function Slider() {
  const slides = [
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
    // остальные слайды
  ];

  return (
    <div style={{ maxWidth: "1500px", margin: "40px auto", padding: "0 20px" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ borderRadius: "12px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container" style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#1A1A40",
              color: "#FFFFFF",
              padding: "2rem",
              boxSizing: "border-box",
            }}>
              {/* Текст */}
              <div style={{
                flex: 1,
                paddingRight: "2rem",
              }}>
                <h3 style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  margin: 0,
                  fontFamily: "Raleway, sans-serif",
                  color: "#A1C2FF",
                }}>
                  {slide.title}
                </h3>
                <p style={{
                  fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                  margin: "1rem 0 0",
                  fontFamily: "Inter, sans-serif",
                }}>
                  {slide.text}
                </p>
              </div>

              {/* Картинка */}
              <div style={{
                flex: "none",  // важно для колонки
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "2rem",
                boxSizing: "border-box",
              }}>
                <img src={slide.image} alt={slide.title} style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px",
                  border: "3px solid #2D2DFF",
                }}/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Медиа-запросы */}
      <style>{`
        @media (max-width: 1024px) { /* планшет */
          .slide-container {
            flex-direction: column !important;
            align-items: center;
          }
          .slide-container > div:first-child {
            padding-right: 0 !important;
            margin-bottom: 1.5rem;
            text-align: center;
          }
          .slide-container > div:last-child {
            padding-left: 0 !important;
            width: 80%; /* картинка не растягивается */
          }
        }

        @media (max-width: 600px) { /* мобильный */
          .slide-container > div:last-child {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}

export default Slider;
