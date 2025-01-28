import { styled } from "@mui/system";
import { Box } from "@mui/material";

const NavBarStyles = styled(Box)(({ theme }) => ({
  ".navBarContainer": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2, 8),
    backgroundColor: theme.palette.primary.main,
  },
  ".navBarLogo": {
    height: theme.spacing(4),
  },
  ".navBarControls": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(1),
    },
  },
  ".searchButton": {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-flex",
    },
    svg: {
      fontSize: theme.spacing(3),
    },
  },
}));

export default NavBarStyles;
