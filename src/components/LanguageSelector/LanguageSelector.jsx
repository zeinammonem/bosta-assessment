import { useState } from "react";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageSelectorStyles from "./LanguageSelector.styles";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const locales = {
  English: "en",
  عربي: "ar",
};

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const { i18n } = useTranslation();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language) => {
    if (language) {
      setSelectedLanguage(language);
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    i18n.changeLanguage(locales[selectedLanguage]);
    document.body.setAttribute("lang", locales[selectedLanguage]);
  }, [i18n, selectedLanguage]);

  return (
    <LanguageSelectorStyles>
      <Button
        variant="text"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        className="languageSelectorButton"
      >
        <Typography className="languageSelectorText" variant="h5">
          {selectedLanguage}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        MenuListProps={{ "aria-labelledby": "language-button" }}
      >
        <MenuItem onClick={() => handleClose("English")}>English</MenuItem>
        <MenuItem onClick={() => handleClose("عربي")}>عربي</MenuItem>
      </Menu>
    </LanguageSelectorStyles>
  );
};

export default LanguageSelector;
