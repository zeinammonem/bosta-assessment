import { Box, styled } from "@mui/material";

const SpinnerStyles = styled(Box)(() => ({
  ".spinner": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
}));

export default SpinnerStyles;