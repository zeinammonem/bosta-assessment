import { Alert } from "@mui/material";
import ErrorStyles from "./Error.styles";

function Error() {
  return (
    <ErrorStyles>
      <Alert
        className="error"
        severity="error"
      >
        Error fetching shipment details.
      </Alert>
    </ErrorStyles>
  );
}

export default Error;
