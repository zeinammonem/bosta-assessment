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
import { useState } from "react";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";

function ShipmentDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  const [shipment, setShipment] = useState({});

  const steps = [
    t("stepper.picked_up"),
    t("stepper.processing"),
    t("stepper.out_for_delivery"),
    t("stepper.delivered"),
  ];

  const { PromisedDate, TrackingNumber = 7234258 } = shipment;

  const fetchTrackingDetails = async () => {
    const response = await fetch(
      "https://tracking.bosta.co/shipments/track/7234258"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  };

  const { data, isLoading, error } = useQuery(
    ["TrackingNumber"],
    fetchTrackingDetails
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: colors.secondary,
        boxShadow: 2,
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
