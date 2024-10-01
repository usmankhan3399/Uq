import React from "react";
import {
  Grid2,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../assets/styles/ProjectDescription.css";

const ProjectDescription = () => {
  return (
    <Box className="Project-section">
      <div className="image-container">
        <img
          src="/images/img1.jpg"
          alt="Image with Markings"
          className="marked-image"
        />
        {/* Example marking */}
        <div className="marking"></div>
      </div>

      <Box className="Image-description">
        <Typography variant="h5" gutterBottom>
          Image Description
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a description of the image, explaining the symbols and their
          significance.This is a description of the image, explaining the
          symbols and their significance.
          <br />
          <br />
          This is a description of the image, explaining the symbols and their
          significance. This is a description of the image, explaining the
          symbols and their significance.This is a description of the image,
          explaining the symbols and their significance.
        </Typography>

        <Typography variant="h5" gutterBottom className="symbols-heading">
          Symbols and Their Meanings
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ArrowRightAltIcon className="icon" />
            </ListItemIcon>
            <ListItemText primary="Right Arrow - Represents South" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightAltIcon className="icon rotate-90" />
            </ListItemIcon>
            <ListItemText primary="Up Arrow - Represents North" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightAltIcon className="icon rotate-180" />
            </ListItemIcon>
            <ListItemText primary="Left Arrow - Represents West" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ArrowRightAltIcon className="icon rotate-270" />
            </ListItemIcon>
            <ListItemText primary="Down Arrow - Represents East" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
