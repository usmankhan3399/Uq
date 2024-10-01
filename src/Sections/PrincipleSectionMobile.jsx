import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const PrincipleSectionMobile = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
        // gap: "10px",
        // alignItems: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}>
        <img
          src="/images/Vision.png"
          alt="Vision image"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
          }}
        />
        <Typography
          variant="h2"
          sx={{
            margin: "10px 0",
            fontWeight: 700,
            fontSize: "24px",
            color: "#2a6369",
          }}>
          {t("principleSection.vision.title")}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "75%",
          }}>
          {t("principleSection.vision.description")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}>
        <img
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
          }}
          src="/images/Mission.png"
          alt="Mission image"
        />
        <Typography
          variant="h2"
          sx={{
            margin: "10px 0",
            fontWeight: 700,
            fontSize: "24px",
            color: "#2a6369",
          }}>
          {t("principleSection.mission.title")}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "75%",
          }}>
          {t("principleSection.mission.description")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}>
        <img
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
          }}
          src="/images/Goals.png"
          alt="Gaols image"
        />
        <Typography
          variant="h2"
          sx={{
            margin: "10px 0",
            fontWeight: 700,
            fontSize: "24px",
            color: "#2a6369",
          }}>
          {t("principleSection.goals.title")}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "75%",
          }}>
          {t("principleSection.goals.description")}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}>
        <img
          style={{
            width: "80px",
            height: "80px",
            objectFit: "contain",
          }}
          src="/images/Values.png"
          alt="Values image"
        />
        <Typography
          variant="h2"
          sx={{
            margin: "10px 0",
            fontWeight: 700,
            fontSize: "24px",
            color: "#2a6369",
          }}>
          {t("principleSection.values.title")}
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            maxWidth: "75%",
          }}>
          {t("principleSection.values.description")}
        </Typography>
      </Box>
    </Box>
  );
};

export default PrincipleSectionMobile;
