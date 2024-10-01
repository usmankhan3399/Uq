import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";

import "../assets/styles/VirtualTours.css";
import "../assets/styles/NewProject.css";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useMemo, useRef } from "react";

// Function to preload images
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const VirtualTours = () => {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  const cardsData = useMemo(
    () =>
      t("virtualTours.places", { returnObjects: true }).map((place) => ({
        ...place,
      })),
    [t]
  );

  useEffect(() => {
    const imageUrls = cardsData.map((card) => card.image);
    preloadImages(imageUrls);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (swiperRef.current && swiperRef.current.autoplay) {
          if (entry.isIntersecting) {
            swiperRef.current.autoplay.start();
          } else {
            swiperRef.current.autoplay.stop();
          }
        }
      },
      { threshold: 0.1 } // Start observing when at least 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div ref={sectionRef} className="virtual-tours-section" id="virtual-tours">
      <Box className="photo-album-container">
        <Typography variant="h4" className="virtual-tours-heading">
          {t("virtualTours.title")}
        </Typography>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            1440: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
            200: { slidesPerView: 1 },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {cardsData.map((card, index) => (
            <SwiperSlide key={index}>
              <Box className="image-card">
                <img
                  src={card.image}
                  alt={card.name}
                  className="image-card-img"
                />
                <Box className="card-text-container">
                  <Typography variant="h1" className="card-heading">
                    <span
                      onClick={() =>
                        window.open(card.link, "_blank", "noopener,noreferrer")
                      }
                      style={{ cursor: "pointer" }}>
                      {t("virtualTours.title")}
                    </span>
                  </Typography>
                  <Typography variant="h1" className="card-text">
                    {card.name}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default VirtualTours;
