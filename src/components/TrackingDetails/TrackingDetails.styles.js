import { styled } from "@mui/system";
import { Box } from "@mui/material";

const TrackingDetailsStyles = styled(Box)(({ theme }) => ({
  ".trackingDetailsContainer": {
    paddingLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  ".trackingDetailstimeLineItem": {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    border: "1px solid",
    borderColor: theme.palette.grey[300],
    width: "fit-content",
    marginBottom: theme.spacing(2),
  },
}));

export default TrackingDetailsStyles;
