import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import ShipmentDetails from "../ShipmentDetails/ShipmentDetails.jsx";
import TrackingDetails from "../TrackingDetails/TrackingDetails.jsx";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner.jsx";
import Error from "../Error/Error.jsx";

function Main({ isMobileView, trackingNumber }) {
  const theme = useTheme();

  const fetchTrackingDetails = async () => {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${trackingNumber}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  };

  const { data, isLoading, error } = useQuery(
    ["trackingDetails", trackingNumber],
    fetchTrackingDetails,
    {
      enabled: !!trackingNumber,
      cacheTime: 5 * 60 * 1000, // 5 minutes
      retry: 0,
    }
  );

  if (error) {
    return <Error />;
  }
  if (isLoading) {
    return <Spinner />;
  }

  const transitStates =
    data?.TransitEvents?.reduce((acc, event) => {
      const date = event.timestamp.split("T")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, []) || [];

  const sortedTransitStates = Object.entries(transitStates)
    .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA))
    .map(([date, events]) => ({ date, events }));

  let shipmentDetails = {
    TrackingNumber: data?.TrackingNumber,
    CurrentState: data?.CurrentStatus?.state || "DELIVERED",
    CurrentDate: data?.CurrentStatus?.timestamp || null,
    States: sortedTransitStates,
    PromisedDate: data?.PromisedDate,
  };

  return (
    <Box
      sx={{
        margin: "auto",
        width: "60%",
        [theme.breakpoints.up("xl")]: {
          width: "50%",
        },
        [theme.breakpoints.down("lg")]: {
          width: "60%",
        },

        [theme.breakpoints.down("md")]: {
          width: "80%",
        },
      }}
    >
      <ShipmentDetails
        isMobileView={isMobileView}
        shipmentDetails={shipmentDetails}
      />
      <TrackingDetails shipmentDetails={shipmentDetails} />
    </Box>
  );
}

export default Main;
