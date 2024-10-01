import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import "../assets/styles/Navbar.css";
import CustomButton from "./CustomButton";
import { useTranslation } from "react-i18next";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // Change the language using i18next
  };
  // Function to toggle to Arabic
  // const switchToArabic = () => {
  //   changeLanguage("ar");
  // };

  // // Function to toggle to English
  // const switchToEnglish = () => {
  //   changeLanguage("en");
  // };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = () => {
    // navigate("/");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const directionClass = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
            className={directionClass}>
            <img
              src="/images/umm-Alqura-logo-1.png"
              alt="navbar-logo"
              className="logo-image"
              onClick={handleClick}
              style={{ cursor: "pointer", width: "100%" }}
            />
          </Box>

          {/* Navbar Menu */}
          <Box
            className="navbar-menu"
            sx={{
              display: { xs: "none", md: "flex", flexGrow: 1 },
            }}>
            <Box
              justifyContent="center"
              className="navbar-menu-items"
              sx={{
                display: "flex",
                gap: "20px",
              }}>
              <Box>
                <Typography variant="h2" color="black" sx={{ width: "64px" }}>
                  {t("navbar.menu.about")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color="black"
                  sx={{ cursor: "pointer", textWrap: "nowrap" }}
                  onClick={() => scrollToSection("new-project")}>
                  {t("navbar.menu.projects")}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h2" color="black">
                  {t("navbar.menu.blog")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color="black"
                  sx={{ cursor: "pointer", textWrap: "nowrap" }}
                  onClick={() => scrollToSection("virtual-tours")}>
                  {t("navbar.menu.virtualTours")}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("contact-form")}>
                  {t("navbar.menu.contact")}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                color: "#2A6369",
              }}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography variant="h2" color="black">
                  {t("navbar.menu.about")}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("new-project")}>
                  {t("navbar.menu.projects")}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography variant="h2" color="black">
                  {t("navbar.menu.blog")}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("virtual-tours")}>
                  {t("navbar.menu.virtualTours")}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  variant="h2"
                  color="black"
                  sx={{ cursor: "pointer" }}
                  onClick={() => scrollToSection("contact-form")}>
                  {t("navbar.menu.contact")}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Buttons for Language Switching */}
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center",
            }}>
            <CustomButton
              className="get-in-touch-btn"
              onClick={() => scrollToSection("contact-form")}
              text={i18n.t("navbar.button")}
            />
            {/* Separate buttons for Arabic and English */}
            <CustomButton
              className="language-toggle-btn"
              onClick={() =>
                changeLanguage(currentLanguage === "en" ? "ar" : "en")
              }
              text={
                currentLanguage === "en" ? (
                  <>
                    EN
                    <img
                      src="/icons/british-flag-icon.png"
                      alt="English"
                      className="flag-icon"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src="/icons/saudi-arabia-flag-icon.png"
                      alt="Arabic"
                      className="flag-icon"
                    />
                    AR
                  </>
                )
              }
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
