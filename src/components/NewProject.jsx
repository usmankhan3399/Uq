import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "../assets/styles/NewProject.css"; // Using the NewProjects CSS file
import { Box, Typography, Button } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";

const NewProject = () => {
  const { t } = useTranslation();

  const images = useMemo(
    () => [
      {
        id: 1,
        src: "/images/masjid-quba.jpg",
        alt: "Photo 1",
        heading: t("newProjects.images.0.heading"), // Translate here
        details: t("newProjects.images.0.details"), // Translate here
      },
      {
        id: 2,
        src: "/images/uhud-mountain.jpg",
        alt: "Photo 2",
        heading: t(`newProjects.images.1.heading`),
        details: t("newProjects.images.1.details"),
      },
      {
        id: 3,
        src: "/images/janat-al-baqee.jpg",
        alt: "Photo 3",
        heading: t("newProjects.images.2.heading"),
        details: t("newProjects.images.2.details"),
      },
      {
        id: 4,
        src: "/images/Desert.jpg",
        alt: "Photo 4",
        heading: t("newProjects.images.3.heading"),
        details: t("newProjects.images.3.details"),
      },
      {
        id: 5,
        src: "/images/sky-view.jpg",
        alt: "Photo 5",
        heading: t("newProjects.images.4.heading"),
        details: t("newProjects.images.4.details"),
      },
      {
        id: 6,
        src: "/images/mountain.jpg",
        alt: "Photo 6",
        heading: t("newProjects.images.5.heading"),
        details: t("newProjects.images.5.details"),
      },
      {
        id: 7,
        src: "/images/night-view.jpg",
        alt: "Photo 7",
        heading: t("newProjects.images.6.heading"),
        details: t("newProjects.images.6.details"),
      },
    ],
    [t] // Add 't' to the dependency array
  );
  const handleClick = () => {
    window.open(
      "https://tourmakkah.viewin360.co/share/collection/7Z4tY?logo=1&info=0&logosize=40&fs=1&vr=1&zoom=1&autorotate=-0.06&thumbs=3&margin=30&alpha=0.89&inst=0",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const swiperRef = useRef(null);

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
    <div className="image-slider-container" id="new-project">
      <Box className="photo-album-container">
        <Typography variant="h4" className="photo-album-heading">
          {t("newProjects.title")}
        </Typography>
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          // pagination={{ clickable: true }}
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
            // 480: { slidesPerView: 1 },
            300: { slidesPerView: 1 },
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <Box className="photo-card">
                <img src={image.src} alt={image.alt} className="photo-img" />
                <Box className="photo-overlay">
                  <Typography variant="h6">{image.heading}</Typography>
                  <Typography variant="h2">{image.details}</Typography>

                  <Button
                    variant="contained"
                    className="view-btn"
                    onClick={handleClick}>
                    {t("newProjects.buttonText")}
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
};

export default NewProject;
