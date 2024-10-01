import React from "react";
import "../assets/styles/AboutUsPage.css";
// import image1 from
// import image2 from "../assets/image2.jpg";
import { Box } from "@mui/material";

const AboutUsPage = () => {
  return (
    <Box className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>Who Are We?</h2>

          <p className="about-description">
            We are a digital and branding company that believes in the power of
            creative strategy and along with great design.
          </p>
          <p className="about-subtext">
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et.
          </p>
          <Box className="list">
            <ul className="about-list">
              <li> Aenean eu leo quam ornare curabitur blandit tempus.</li>
              <li> Nullam quis risus eget urna mollis ornare donec elit.</li>
            </ul>
            <ul className="about-list">
              <li> Etiam porta sem malesuada magna mollis euismod.</li>
              <li> Fermentum massa vivamus faucibus amet euismod.</li>
            </ul>
          </Box>
        </div>
      </div>
      <div className="about-images">
        {/* <h1 className="dot">.</h1> */}
        {/* <div className="about-images-container"> */}
        <img
          src="/images/img2.png"
          alt="Team working"
          className="about-image image1"
        />
        <img
          src="/images/Makkah.jpg"
          alt="Team discussion"
          className="about-image image2"
        />
      </div>
      {/* </div> */}
    </Box>
  );
};

export default AboutUsPage;
