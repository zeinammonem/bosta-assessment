import { styled } from "@mui/system";
import { Box } from "@mui/material";

const ShipmentDetailsStyles = styled(Box)(({ theme }) => ({
  ".shipmentDetailsContainer": {
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[1],
    margin: "auto",
    marginTop: theme.spacing(2),
    color: theme.palette.text.primary,
  },
}));

export default ShipmentDetailsStyles;
