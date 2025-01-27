import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LanguageSelector from "./LanguageSelector";
// import { ReactComponent as BostaLogoEnglish } from "../assets/BostaLogoEnglish.svg";
// import { ReactComponent as BostaLogoArabic } from '../assets/BostaLogoArabic.svg';

function NavBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <nav>
      <>
        <Box sx={{ position: "relative", height: "100px" }}>
          {/* ICONS */}
          <Box
            sx={{
              height: "100px",
              backgroundColor: colors.primary, // Light gray
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <LanguageSelector />
            <IconButton
              onClick={colorMode.toggleColorMode}
              sx={{ m: "0px 20px 0px 0px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
                  {/* <BostaLogoEnglish width="50" height="50"/> */}
          </Box>
        </Box>
      </>
    </nav>
  );
}

export default NavBar;
