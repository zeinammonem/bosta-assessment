import { styled } from "@mui/system";
import { Box } from "@mui/material";

const HeaderStyles = styled(Box)(({ theme }) => ({
  ".headerContainer": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    flexDirection: "column",
    textAlign: "center",
  },
  ".headerTitle": {
    color: theme.palette.text.primary,
    fontWeight: "bold !important",
    marginBottom: theme.spacing(2),
    variant: "h1",
  },
  ".headerSubtitle": {
    color: theme.palette.text.primary,
    paddingBottom: theme.spacing(4),
  },
}));

export default HeaderStyles;
