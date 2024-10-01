import { Box, useMediaQuery } from "@mui/material";

import BannerText from "./components/BannerText";
import PrinicpleSection from "./Sections/PrinicpleSection";
import Footer from "./components/Footer";
import VirtualTours from "./Sections/VirtualTours";
import ContactForm from "./Sections/ContactForm";
import NewProject from "./components/NewProject";
import ResponsiveAppBar from "./components/Navbar2";
import PrincipleSectionMobile from "./Sections/PrincipleSectionMobile";
import "./assets/styles/Home.css";
import AboutUs from "./Sections/AboutUs";
import AboutUsPage from "./pages/AboutUsPage";
import ProjectDescription from "./Sections/ProjectDescription";
import ContactInfo from "./Sections/ContactInfo";
import MapLocation from "./Sections/MapLocation";
function App() {
  const isMobile = useMediaQuery("(max-width:980px)");

  return (
    <>
      <Box id="home-section" className="banner">
        {/* <Box className="photo-overlay1"></Box> */}
        <ResponsiveAppBar />
        <BannerText />
      </Box>

      {/* {isMobile ? (
        <PrincipleSectionMobile />
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}>
          <PrinicpleSection />
        </Box>
      )} */}
      <ContactInfo />
      <AboutUs />
      <AboutUsPage />
      <ProjectDescription />
      <VirtualTours />

      <NewProject />
      <MapLocation />
      <ContactForm />

      <Footer />
    </>
  );
}

export default App;
