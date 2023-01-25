import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { lightTheme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
