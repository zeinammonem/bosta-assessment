import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

const SearchSection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box sx={{ position: "relative", height: "200px" }}>
        {/* Gray Background */}
        <Box
          sx={{
            height: "50%",
            backgroundColor: colors.primary, // Light gray
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        ></Box>

        {/* White Background */}
        <Box
          sx={{
            height: "50%",
            backgroundColor: colors.secondary, // White
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
          }}
        ></Box>

        {/* Centered Content */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centering the search bar
            display: "flex",
            alignItems: "center",
            gap: 1,
            zIndex: 2,
          }}
        >
          <TextField
        //   value={query}
        //     onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            placeholder="Enter Tracking Number"
            sx={{
              width: "400px",
              backgroundColor: "#ffffff", // Ensure the input stays white
              borderRadius: "4px",
            }}
          />
          <IconButton
            type="submit"
            sx={{
              backgroundColor: "red",
              color: "#fff",
              "&:hover": {
                backgroundColor: "darkred",
              },
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default SearchSection;
