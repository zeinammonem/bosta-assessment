import { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

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

  return (
    <span>
      <Button
        variant="text"
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          color: "grey",
          textTransform: "none",
          fontWeight: "bold",
          "&:hover": {
            color: "red",
          },
          "&:active": {
            color: "darkred",
          },
        }}
      >
        {selectedLanguage}
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
    </span>
  );
};

export default LanguageSelector;
