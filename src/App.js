import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
