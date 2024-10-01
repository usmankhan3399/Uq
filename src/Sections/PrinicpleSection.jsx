import { Box, Typography } from "@mui/material";
import "../assets/styles/PrinicpleSection.css";
import { useTranslation } from "react-i18next";

const PrinicpleSection = () => {
  const { t } = useTranslation();

  return (
    <Box className="logo-section">
      <Box className="logo-item">
        <img
          src="/images/Vision.png"
          alt="Vision image"
          className="vision-image"
        />
        <Typography variant="h2" className="logo-heading">
          {t("principleSection.vision.title")}
        </Typography>
        <Typography className="logo-description">
          {t("principleSection.vision.description")}
        </Typography>
      </Box>
      <Box className="logo-item">
        <img
          src="/images/Mission.png"
          alt="Mission image"
          className="mission-image"
        />
        <Typography variant="h2" className="logo-heading">
          {t("principleSection.mission.title")}
        </Typography>

        <Typography className="logo-description">
          {t("principleSection.mission.description")}
        </Typography>
      </Box>
      <Box className="logo-item">
        <img
          src="/images/Goals.png"
          alt="Gaols image"
          className="goals-image"
        />
        <Typography variant="h2" className="logo-heading">
          {t("principleSection.goals.title")}
        </Typography>

        <Typography className="logo-description">
          {t("principleSection.goals.description")}
        </Typography>
      </Box>
      <Box className="logo-item">
        <img
          src="/images/Values.png"
          alt="Values image"
          className="values-image"
        />
        <Typography variant="h2" className="logo-heading">
          {t("principleSection.values.title")}
        </Typography>

        <Typography className="logo-description">
          {t("principleSection.values.description")}
        </Typography>
      </Box>
    </Box>
  );
};

export default PrinicpleSection;
