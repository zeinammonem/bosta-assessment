import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

function Header() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Typography
        variant="h2"
        color={colors.black}
        backgroundColor={colors.primary}
        display={"flex"}
        justifyContent={"center"}
        fontWeight="bold"
        sx={{ m: "0 0 0 0" }}
      >
        Track Your Order
      </Typography>{" "}
    </div>
  );
}

export default Header;
