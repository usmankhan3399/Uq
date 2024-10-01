import { AppBar, Toolbar, Grid2, Button, Typography, Box } from "@mui/material";
import CustomButton from "./CustomButton";
import "../assets/styles/Navbar.css"; // Import the separate CSS file for styling
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Box className="main-box">
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Grid2
            container
            alignItems="center"
            justifyContent="space-between"
            className="navbar-grid">
            <Grid2 item md={2}>
              <Typography variant="h6" component="div" className="navbar-logo">
                <img
                  src="/images/umm-Alqura-logo-1.png"
                  alt="navbar-logo"
                  className="logo-image"
                  onClick={handleClick}
                  style={{ cursor: "pointer" }}
                />
              </Typography>
            </Grid2>

            <Grid2 item md={6} className="navbar-menu">
              <Grid2
                container
                spacing={5}
                justifyContent="center"
                className="navbar-menu-items">
                <Grid2 item>
                  <Typography variant="h2" color="black" sx={{ width: "64px" }}>
                    About us
                  </Typography>
                </Grid2>
                <Grid2 item>
                  <Typography
                    variant="h2"
                    color="black"
                    sx={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("new-project")}>
                    New Projects
                  </Typography>
                </Grid2>

                <Grid2 item>
                  <Typography variant="h2" color="black">
                    Blog
                  </Typography>
                </Grid2>
                <Grid2 item>
                  <Typography
                    variant="h2"
                    color="black"
                    sx={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("virtual-tours")}>
                    Virtual Tours
                  </Typography>
                </Grid2>
                <Grid2 item>
                  <Typography
                    variant="h2"
                    color="black"
                    sx={{ cursor: "pointer" }}
                    onClick={() => scrollToSection("contact-form")}>
                    Contact
                  </Typography>
                </Grid2>
              </Grid2>
            </Grid2>

            {/* Buttons on the right */}
            <Grid2 item md={4}>
              <Grid2 container spacing={2} className="navbar-buttons">
                <Grid2 item>
                  <CustomButton
                    onClick={() => scrollToSection("contact-form")}
                    text="Get In Touch"
                  />
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
