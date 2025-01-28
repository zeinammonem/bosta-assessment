import {
  Box,
  Paper,
  Step,
  StepConnector,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

function TrackingDetails() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(2); // Set this dynamically based on tracking status

  const steps = [
    {
      label: "Shipment Created", // replace with date
      description:
        "We have received your order and it is being prepared for shipment.",
    },
    {
      label: "Picked Up",
      description:
        "Your package has been picked up by the courier and is on its way.",
    },
    {
      label: "In Transit",
      description:
        "Your package is on the move and heading towards your destination.",
    },
    {
      label: "Out for Delivery",
      description: "The courier is out for delivery and will reach you soon.",
    },
    {
      label: "Delivered",
      description:
        "Your package has been delivered. Thank you for choosing us!",
    },
  ];

  return (
    <Box
      sx={{
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "secondary",
        maxWidth: "70%",
        margin: "20px auto",
        marginTop: "0px",
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: "20px" }}
        color={colors.grey.text}
      >
        Tracking Details
      </Typography>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
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
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                "& .MuiStepIcon-root.Mui-completed": {
                  color: colors.blue,
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: activeStep === index ? "bold" : "normal" }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <Box
              sx={{
                // maxWidth: 400,
                // margin: "20px auto",
                marginLeft: "30px",
                padding: "20px",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "8px",
                border: "1px solid",
                borderColor: "grey.300",
              }}
            >
              {/* <StepContent> */}
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
              {/* </StepContent> */}
            </Box>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, marginTop: "20px" }}>
          <Typography>
            All steps completed - Your package has been delivered!
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

export default TrackingDetails;
