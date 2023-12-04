// App.js
import React from "react";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500', // cor laranja
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <RegisterPage />  
    </div>
    </ThemeProvider>
  );

}

export default App;
