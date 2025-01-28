import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import HeaderStyles from "./Header.styles";
import pinIcon from "../../assets/Pin.svg";

function Header() {
  const { t } = useTranslation();

  return (
    <HeaderStyles>
      <Box className="headerContainer">
        <Box
          className="headerImage"
          component="img"
          src={pinIcon}
          alt="Pin Icon"
        />
        <Typography className="headerTitle" variant="h1">
          {t("tracking.title")}
        </Typography>
        <Typography className="headerSubtitle" variant="h5">
          {t("tracking.subtitle")}
        </Typography>
      </Box>
    </HeaderStyles>
  );
}

export default Header;
