import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          text: "#9e9589",
          dot: "#2f3335",
        },
        primary: "#0c1a2e",
        secondary: "#0c101b",
        // red: "#D32F2F"
        red: {
          100: "#E30613",
          200: "#b6050f",
        },
        blue: "#4cceac",
        black: "#d8d8d3",
      }
    : {
        grey: {
          text: "#667085",
          dot: "#D0D5DD",
        },
        primary: "#F3FAFB",
        secondary: "#ffffff",
        red: {
          100: "#E30613",
          200: "#b6050f",
        },
        blue: "#0098A5",
        black: "#111619",
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary,
            },
            secondary: {
              main: colors.secondary,
            },
            background: {
              default: colors.primary,
            },
            red: {
              main: colors.red[100],
              dark: colors.red[200],
            },
            blue: {
              main: colors.blue,
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary,
            },
            secondary: {
              main: colors.secondary,
            },
            background: {
              default: "#ffffff",
            },
            red: {
              main: colors.red[100],
              dark: colors.red[200],
            },
            blue: {
              main: colors.blue,
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
