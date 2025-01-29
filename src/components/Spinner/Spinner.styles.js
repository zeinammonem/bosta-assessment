import { Box, styled } from "@mui/material";
const SpinnerStyles = styled(Box)(({ theme }) => ({
  ".spinner": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: theme.spacing(35),
  },
}));
export default SpinnerStyles;
