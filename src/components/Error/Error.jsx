import { Alert } from "@mui/material";
import ErrorStyles from "./Error.styles";
import { useTranslation } from "react-i18next";
function Error() {
  const { t } = useTranslation();
  return (
    <ErrorStyles>
      <Alert className="error" severity="error">
        {t("order.not_found")}
      </Alert>
    </ErrorStyles>
  );
}
export default Error;
