// App.js
import React from "react";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Forms/SignupForm";
import Frame from "./components/Header/Frame";
import "./App.css";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <Frame />
      <Grid>
        <Grid item xs={12}>
          <Signup />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
