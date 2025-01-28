import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails.jsx";
import TrackingDetails from "../TrackingDetails/TrackingDetails.jsx";

function Main() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div
      style={{
        backgroundColor: colors.secondary,
      }}
    >
      <ShipmentDetails />
      <TrackingDetails />
    </div>
  );
}

export default Main;
