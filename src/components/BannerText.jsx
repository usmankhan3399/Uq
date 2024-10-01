import { Box, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../assets/styles/Home.css";

const BannerText = () => {
  const { t } = useTranslation();

  return (
    <Box className="bg-text-container">
      <Box className="bg-text">
        <Typography variant="h1">
          {t("bannertext.title")} <br />
          <span>{t("bannertext.highlightedTitle.landInvestments")}</span> <br />
          {t("bannertext.and")}
          <span> {t("bannertext.highlightedTitle.business")} </span>
        </Typography>
        <Divider />
        <Typography variant="h2">{t("bannertext.subtitle")}</Typography>
      </Box>
    </Box>
  );
};

export default BannerText;
