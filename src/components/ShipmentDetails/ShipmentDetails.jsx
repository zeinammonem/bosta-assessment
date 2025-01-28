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
import { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

function ShipmentDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  const [shipment, setShipment] = useState({});
  const [loading, setLoading] = useState(false);

  const steps = [
    t("stepper.picked_up"),
    t("stepper.processing"),
    t("stepper.out_for_delivery"),
    t("stepper.delivered"),
  ];

  const { PromisedDate, TrackingNumber = 7234258 } = shipment;

  const BASE_URL = "https://tracking.bosta.co/shipments/track";

  useEffect(() => {
    async function getShipmentDetails() {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/${TrackingNumber}`);
      const data = await res.json();
      console.log(data);
      setShipment(data);
      setLoading(false);
    }
    getShipmentDetails();
  }, [TrackingNumber]);

  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "secondary",
        boxShadow: 1,
        maxWidth: "70%",
        margin: "20px auto",
        marginTop: "0px",
      }}
    >
      <Typography color={colors.grey.text} sx={{ marginBottom: "5px" }}>
        {`${t("order.number")} #${TrackingNumber}`}
      </Typography>
      <Typography
        color={colors.blue}
        variant="h3"
        sx={{ marginBottom: "5px", fontWeight: "bold" }}
      >
        <strong>Arriving by:</strong> {PromisedDate}
      </Typography>
      <Typography color={colors.grey.text} sx={{ marginBottom: "5px" }}>
        Status: {status}
      </Typography>
      <Divider aria-hidden="true" sx={{ marginBottom: 5 }} />

      <Stepper
        activeStep={2}
        alternativeLabel
        sx={{ direction: "ltr !important" }}
        connector={
          <StepConnector
            sx={{
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
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default ShipmentDetails;
