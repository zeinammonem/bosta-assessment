import { Box, IconButton, Popover, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { ColorModeContext } from "../../theme";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useMediaQuery } from "@mui/material";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import AppBar from "@mui/material/AppBar";
import NavBarStyles from "./NavBar.styles";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../SearchBar/SearchBar";
import bostaLogoEn from "../../assets/BostaLogoEnglish.svg";
import bostaLogoAr from "../../assets/BostaLogoArabic.svg";

function NavBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [logo, setLogo] = useState(bostaLogoEn);
  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState(null);
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (!isMobileView) {
      setAnchorEl(null);
    }
  }, [isMobileView]);

  const open = Boolean(anchorEl);
  const id = open ? "search-popover" : undefined;

  useEffect(() => {
    setLogo(i18n.dir() === "rtl" ? bostaLogoAr : bostaLogoEn);
  }, [i18n, i18n.language]);

  //TODO search component in a modal
  return (
    <AppBar position="static">
      <NavBarStyles>
        <Box className="navBarContainer">
          <Box
            className="navBarLogo"
            component="img"
            src={logo}
            alt="Bosta Logo"
          />
          <Box className="navBarControls">
            <IconButton className="searchButton" onClick={handleClick}>
              <SearchOutlinedIcon />
            </IconButton>

            <IconButton onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>

            <LanguageSelector />
          </Box>
        </Box>
      </NavBarStyles>
      <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={null}
        slotProps={{
          paper: {
            sx: {
              position: "fixed",
              top: `${theme.spacing(10)} !important`,
              left: `${theme.spacing(10)} !important`,
              borderRadius: 2,
              padding: 2,
              boxShadow: 3,
              width: theme.spacing(45),
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 3,
          }}
        >
          <Typography variant="h6">{t("tracking.mobile_view")}</Typography>
          <Box display="flex">
            <SearchBar />
          </Box>
        </Box>
      </Popover>
    </AppBar>
  );
}

export default NavBar;
