import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Header />
        <SearchBar />
        <Main />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
