import { Box, Typography } from "@mui/material";
import React from "react";
import "../assets/styles/MapLocation.css";

const MapLocation = () => {
  return (
    <Box className="map-section">
      <Typography variant="h1" className="map-section-heading">
        Find Us
      </Typography>
      <Box className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.511355582274!2d39.949339324109424!3d21.33031617735514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c20975dee1607d%3A0x8dadfc8b850f9241!2sUmmul%20Al%20Qura%20University%20-%20Makkah!5e0!3m2!1sen!2s!4v1727780100284!5m2!1sen!2s"
          width="100%"
          height="550px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ummul Al Qura University - Makkah"></iframe>
      </Box>
    </Box>
  );
};

export default MapLocation;
