import { TextField } from "@mui/material";
import {
  SearchBarContainer,
  SearchBarStyles,
  SearchButton,
} from "./SearchBar.styles";
import { SearchOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const SearchSection = () => {
  const { t } = useTranslation();

  return (
    <SearchBarContainer>
      <SearchBarStyles>
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t("tracking.placeholder")}
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
        <SearchButton>
          <SearchOutlined />
        </SearchButton>
      </SearchBarStyles>
    </SearchBarContainer>
  );
};

export default SearchSection;
