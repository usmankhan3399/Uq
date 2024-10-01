import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../assets/styles/AboutUs.css";
// import { useTranslation } from "react-i18next";

const AboutUs = () => {
  //   const { t } = useTranslation();
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Box className="about-us-section" id="about-us">
      <Typography variant="h1" className="about-us-heading">
        About Us
      </Typography>
      <div className="about-us-container">
        <div className="about-image-container">
          <img
            src="/images/aboutus-img.png"
            alt="about-us image"
            className="about-image"
          />
        </div>
        <Box className="about-us-content-container">
          <Typography variant="h1" className="about-us-content-heading">
            Let us guide you home
          </Typography>
          <Typography variant="body1" className="about-us-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            egestas dolor, nec dignissim metus.
          </Typography>
          <Box className="about-us-button-container" onClick={handleClick}>
            <Button className="learn-more-btn">Learn More</Button>
            <Button className="arrow-btn">➜</Button>
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default AboutUs;
