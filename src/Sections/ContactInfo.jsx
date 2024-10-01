import React from "react";
import { Grid2, Card, CardContent, Typography, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../assets/styles/ContactInfo.css";

const ContactInfo = () => {
  return (
    <Box className="Contact-card-section">
      <Typography variant="h1" className="map-section-heading">
        How Can We Help?
      </Typography>
      <Grid2
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="stretch"
        className="contact-info-container">
        <Grid2 item xs={12} sm={6} md={4}>
          <Card className="contact-card">
            <CardContent className="card-content">
              <HomeIcon className="contact-icon" />
              <Typography variant="h6" className="contact-title">
                Our Address
              </Typography>
              <Typography variant="body2" className="contact-text">
                2464 Royal Ln. Mesa, New Jersey 45463
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Card className="contact-card">
            <CardContent className="card-content">
              <EmailIcon className="contact-icon" />
              <Typography variant="h6" className="contact-title">
                Email Us
              </Typography>
              <Typography variant="body2" className="contact-text">
                hallo@aplio.com
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 item xs={12} sm={6} md={4}>
          <Card className="contact-card">
            <CardContent className="card-content">
              <PhoneIcon className="contact-icon" />
              <Typography variant="h6" className="contact-title">
                Call Us
              </Typography>
              <Typography variant="body2" className="contact-text">
                +391 (0)35 2568 4593
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default ContactInfo;
