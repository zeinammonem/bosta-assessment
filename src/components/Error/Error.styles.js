import { Box, styled } from "@mui/material";

const ErrorStyles = styled(Box)(() => ({
  ".error": {
    padding: "20px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    maxWidth: "50%",
    margin: "20px auto",
    fontSize: "1rem",
  },
}));

export default ErrorStyles;
