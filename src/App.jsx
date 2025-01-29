import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  const [theme, colorMode] = useMode();
  const { i18n } = useTranslation();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchParams, setSearchParams] = useSearchParams();

  const trackingNumberFromUrl = searchParams.get("tracking-number") || null;
  const [trackingNumber, setTrackingNumber] = useState(trackingNumberFromUrl);

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);

  useEffect(() => {
    if (trackingNumber) {
      setSearchParams({ "tracking-number": trackingNumber });
    } else {
      setSearchParams({});
    }
  }, [trackingNumber, setSearchParams]);

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NavBar
            isMobileView={isMobileView}
            setTrackingNumber={setTrackingNumber}
          />
          <Header />
          {!isMobileView && <SearchBar setTrackingNumber={setTrackingNumber} />}
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              display: "flex",
              height: "100%",
              justifyContent: "center",
              minHeight: "80vh",
            }}
          >
            {trackingNumber && (
              <Main
                isMobileView={isMobileView}
                trackingNumber={trackingNumber}
              />
            )}
          </Box>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
