import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Header />
        <SearchBar />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
