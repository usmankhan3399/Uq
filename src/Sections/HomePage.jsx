// // src/components/Home.js
// import { Box, useMediaQuery } from "@mui/material";
// import BannerText from "../components/BannerText";
// import PrinicpleSection from "./PrinicpleSection";
// import NewProject from "../components/NewProject";
// import Virtualtours from "./VirtualTours";
// import ContactForm from "./ContactForm";
// import Footer from "../components/Footer";
// import "../assets/styles/Home.css";
// import ResponsiveAppBar from "../components/Navbar2";
// import PrincipleSectionMobile from "./PrincipleSectionMobile";

// const HomePage = () => {
//   const isMobile = useMediaQuery("(max-width:980px)");

//   return (
//     <>
//       <Box id="home-section" className="banner">
//         <ResponsiveAppBar />
//         <BannerText />
//       </Box>

//       {isMobile ? (
//         <PrincipleSectionMobile />
//       ) : (
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//           }}>
//           <PrinicpleSection />
//         </Box>
//       )}
//       {/* <Virtualtours /> */}
//       <NewProject />
//       <ContactForm />
//       <Footer />
//     </>
//   );
// };

// export default HomePage;
