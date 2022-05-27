import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00897b",
    },
    secondary: {
      main: "#5c6bc0",
    },
    error: {
      main: "#a64039",
    },
  },
});

export default theme;
