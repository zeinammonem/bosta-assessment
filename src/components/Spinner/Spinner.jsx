import { Box, CircularProgress } from "@mui/material";
import SpinnerStyles from "./Spinner.styles";

function Spinner() {
  return (
    <SpinnerStyles>
      <Box className="spinner">
        <CircularProgress color="red" />
      </Box>
    </SpinnerStyles>
  );
}

export default Spinner;
