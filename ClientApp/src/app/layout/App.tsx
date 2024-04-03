import Catalog from "../../features/catalog/Catalog";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function handleThemeChange() {
    setDarkMode((prevState) => !prevState);
  }

  const palletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      background: { default: palletteType === "light" ? "#ddd" : "#121212" },
      mode: palletteType,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkmode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
