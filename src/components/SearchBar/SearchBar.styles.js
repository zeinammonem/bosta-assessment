import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";

const SearchBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: `linear-gradient(to bottom, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)`,
}));

const SearchBarStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  borderRadius: theme.shape.borderRadius * 2,
  backgroundColor: theme.palette.secondary.main,
  boxShadow: theme.shadows[1],
  overflow: "hidden",
  width: "100%",
  maxWidth: theme.spacing(60),
}));

const SearchButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.red.main,
  color: theme.palette.common.white,
  width: theme.spacing(6),
  borderRadius: "0",
  "&:hover": {
    backgroundColor: theme.palette.red.dark,
  },
  svg: {
    fontSize: theme.spacing(4),
  },
}));

export { SearchBarStyles, SearchButton, SearchBarContainer };
