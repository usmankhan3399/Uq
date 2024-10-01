import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import "../assets/styles/Footer.css";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <Box className="footer">
      <Box
        sx={{
          maxWidth: "1920px",
          flexGrow: 1,
          // height: "389px",
        }}>
        <Box
          className="footer-left"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // justifyColumn: "space-between",
            gap: "50px",
            // flexGrow: 1,
          }}>
          <Box className="footer-column">
            <img
              src="/images/App-logo-transparent.png"
              alt="App Logo"
              className="footer-logo"
              style={{
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}>
              <CustomButton
                className="footer-phone"
                text={"+123 456 7890"}
                // width={"172px"}
                height={"29px"}
                padding={"12px"}
                fontSize={"14px"}
                gap={"15px"}
                icon={
                  <img
                    src="icons/phone-icon.png"
                    alt="phone icon"
                    style={{
                      width: "14px",
                      height: "14px",
                    }}
                  />
                }
              />
              <Typography variant="body2" className="location-info">
                <img
                  src="/icons/navigation-icon.png"
                  alt="navigation icon"
                  style={{ width: "18px", height: "18px", marginRight: "15px" }}
                />
                123 Main St, City
              </Typography>
              <Typography variant="body2" className="phone-info">
                <img
                  src="/icons/phone-icon.png"
                  alt="navigation icon"
                  style={{ width: "14px", height: "14px", marginRight: "15px" }}
                />
                +098 765 4321
              </Typography>
              <Typography variant="body2" className="email-info">
                <img
                  src="/icons/email-icon.png"
                  alt="navigation icon"
                  style={{
                    width: "12.5px",
                    height: "10px",
                    marginRight: "19px",
                  }}
                />
                example@email.com
              </Typography>
            </Box>
          </Box>
          <Box className="footer-links-column">
            <Box className="footer-column">
              <Typography variant="h6" className="footer-heading">
                Overview
              </Typography>
              <Box className="footer-links">
                <Link href="#home-page" className="footer-link">
                  Home
                </Link>
                <Link href="#" className="footer-link">
                  About
                </Link>
                <Link href="#" className="footer-link">
                  Partners
                </Link>
              </Box>
            </Box>

            <Box className="footer-column">
              <Typography variant="h6" className="footer-heading">
                Research
              </Typography>
              <Box className="footer-links">
                <Link href="#new-project" className="footer-link">
                  New Projects
                </Link>
                <Link href="#virtual-tours" className="footer-link">
                  Virtual Tours
                </Link>
                <Link href="#" className="footer-link">
                  Blog
                </Link>
              </Box>
            </Box>

            <Box className="footer-column">
              <Typography variant="h6" className="footer-heading">
                Policy
              </Typography>
              <Box className="footer-links">
                <Link href="#" className="footer-link">
                  Termination of Use
                </Link>
                <Link href="#" className="footer-link">
                  Terms and Conditions
                </Link>
                <Link href="#" className="footer-link">
                  User Duties
                </Link>
              </Box>
            </Box>
          </Box>

          <Box
            className="footer-column-newsletter"
            sx={{
              marginTop: "60px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}>
            <Typography variant="h6" className="newsLetterheading-heading">
              Newsletter Signup
            </Typography>
            <input
              type="email"
              placeholder="Your Email Address"
              className="footer-email"
            />
            <CustomButton
              variant="outline"
              className="footer-submit"
              text={" "}
              borderRadius={"28px"}
              width={"68px"}
              height={"31px"}
              icon={
                <img
                  src="/icons/arrow-right.png"
                  alt="arrow icon"
                  className="button-icon"
                />
              }
            />
          </Box>

          <Box
            className="scroll-button"
            sx={{
              alignSelf: "flex-end",
            }}>
            <CustomButton
              className="scroll-to-top"
              variant="contained"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              text={" "}
              height={"42.86px"}
              width={"42.86px"}
              borderRadius={"50px"}
              icon={<img src="/icons/arrow-up.png" alt="scroll to top" />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
