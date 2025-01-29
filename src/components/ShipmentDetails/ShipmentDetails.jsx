import {
  Box,
  Divider,
  Stepper,
  Typography,
  useTheme,
  StepConnector,
} from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import ShipmentDetailsStyles from "./ShipmentDetails.styles";
import { formatDate } from "../../utils/dateTimeFormatter";

function ShipmentDetails({ isMobileView, shipmentDetails }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t, i18n } = useTranslation();

  const steps = [
    t("stepper.picked_up"),
    t("stepper.processing"),
    t("stepper.out_for_delivery"),
    t("stepper.delivered"),
  ];

  let activeStep = 0;
  switch (shipmentDetails.CurrentState) {
    case "PICKED_UP":
    case " IN_TRANSIT":
      activeStep = 1;
      break;
    case "PROCESSING":
      activeStep = 2;
      break;
    case "OUT_FOR_DELIVERY":
      activeStep = 3;
      break;
    case "DELIVERED":
      activeStep = 4;
      break;
  }

  const renderStatus = (status, currentStatusData) => {
    const title = t(`order.status.${status}.title`);
    const description = t(`order.status.${status}.description`);
    const date = formatDate(currentStatusData, i18n.language, true);
    return (
      <Box>
        <Typography variant="h3" component="span">
          <strong>{`${title}${date != null ? ", " : ""}`}</strong>
        </Typography>
        {date && (
          <Typography variant="h3" component={"span"} color={colors.blue}>
            <strong>{date}</strong>
          </Typography>
        )}

        <Typography color={colors.grey.text} mb={1} mt={1}>
          {description}
        </Typography>
      </Box>
    );
  };

  return (
    <ShipmentDetailsStyles>
      <Box className="shipmentDetailsContainer">
        <Typography color={colors.grey.text} sx={{ marginBottom: "5px" }}>
          {`${t("order.number")} #${shipmentDetails.TrackingNumber}`}
        </Typography>
        {renderStatus(
          shipmentDetails.CurrentState,
          shipmentDetails.CurrentDate
        )}

        <Divider aria-hidden="true" sx={{ marginBottom: 5 }} />

        <Stepper
          activeStep={activeStep}
          alternativeLabel={!isMobileView}
          sx={{
            direction: "ltr !important",
          }}
          orientation={isMobileView ? "vertical" : "horizontal"}
          connector={
            <StepConnector
              sx={{
                "& .MuiStepConnector-lineVertical": {
                  height: isMobileView ? theme.spacing(7) : "auto",
                },

                "&.Mui-completed .MuiStepConnector-line": {
                  borderColor: colors.blue,
                  borderWidth: 3,
                },
              }}
            />
          }
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root.Mui-completed": {
                    color: colors.blue,
                  },
                }}
              >
                <strong>{label}</strong>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </ShipmentDetailsStyles>
  );
}

export default ShipmentDetails;
