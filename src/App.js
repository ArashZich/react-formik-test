import React from "react";
import "./App.css";
import LoginForm from "./components/screen/LoginForm";
import { theme, ThemeProvider } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
