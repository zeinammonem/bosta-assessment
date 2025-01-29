import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import TrackingDetailsStyles from "./TrackingDetails.styles";
import { formatDate, formatTime } from "../../utils/dateTimeFormatter";

function TrackingDetails({ shipmentDetails }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t, i18n } = useTranslation();

  const steps = shipmentDetails.States.map((state) => ({
    title: formatDate(state.date, i18n.language, false, true),
    events: state.events.map((event) => ({
      description: t(`order.status.${event.state}.description`),
      time: formatTime(event.timestamp, i18n.language),
    })),
  }));

  return (
    <TrackingDetailsStyles>
      <Box className="trackingDetailsContainer">
        <Typography
          variant="h4"
          mb={3}
          color={colors.grey.text}
          sx={{
            fontWeight: "bold",
          }}
        >
          {t("tracking.details")}
        </Typography>
        <Timeline>
          {steps.map((step, index) => (
            <TimelineItem key={index} sx={{ "&::before": { display: "none" } }}>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector
                  sx={{ backgroundColor: colors.primary.main }}
                />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  textAlign: i18n.dir() === "rtl" ? "right" : "left",
                }}
              >
                <Typography variant="h5" mb={2}>
                  <strong>{step.title}</strong>
                </Typography>
                {step.events.map((event, index) => (
                  <Box className="trackingDetailstimeLineItem" key={index}>
                    <Typography>{event.description}</Typography>
                    <Typography variant="h6" color={colors.grey.text}>
                      {event.time}
                    </Typography>
                  </Box>
                ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </TrackingDetailsStyles>
  );
}

export default TrackingDetails;
