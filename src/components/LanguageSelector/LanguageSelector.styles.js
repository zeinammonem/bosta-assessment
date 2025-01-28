import { styled } from "@mui/system";

const LanguageSelectorStyles = styled("span")(({ theme }) => ({
  ".languageSelectorButton": {
    color: theme.palette.text.primary,
    textTransform: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "red",
    },
    "&:active": {
      color: "darkred",
    },
  },
  ".languageSelectorText": {
    color: theme.palette.text.primary,
    fontWeight: "bold",
  },
}));

export default LanguageSelectorStyles;
