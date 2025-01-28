import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  const [theme, colorMode] = useMode();
  const { i18n } = useTranslation();
  const isMobileView = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Header />
          {!isMobileView && <SearchBar />}
          <Main />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
