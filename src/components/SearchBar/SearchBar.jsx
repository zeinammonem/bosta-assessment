import { TextField } from "@mui/material";
import {
  SearchBarContainer,
  SearchBarStyles,
  SearchButton,
} from "./SearchBar.styles";
import { SearchOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const SearchSection = ({ setTrackingNumber }) => {
  const { t } = useTranslation();

  const [inputValue, setInputValue] = useState(null);

  const handleClick = () => {
    if (inputValue) {
      setTrackingNumber(inputValue);
    }
  };

  return (
    <SearchBarContainer>
      <SearchBarStyles>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t("tracking.placeholder")}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              border: "none",
              borderRadius: 0,
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
        <SearchButton onClick={handleClick}>
          <SearchOutlined />
        </SearchButton>
      </SearchBarStyles>
    </SearchBarContainer>
  );
};

export default SearchSection;
