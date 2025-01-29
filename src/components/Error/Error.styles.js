import { Box, styled } from "@mui/material";
const ErrorStyles = styled(Box)(({ theme }) => ({
  ".error": {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    maxWidth: "50%",
    margin: `${theme.spacing(2)} auto`,
    fontSize: "1rem",
  },
}));
export default ErrorStyles;
