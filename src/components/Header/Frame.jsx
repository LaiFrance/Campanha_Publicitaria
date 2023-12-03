// Frame.js
import React from "react";
import { Button, Grid } from "@mui/material";
import Item from "@mui/material/Grid";
import logocamapanha from "../../asserts/logo-camapanha-red-tagline.svg";
import clouds from "../../asserts/clouds.png";
import "./styles.css";

function Frame() {
  return (
    <div className="frameContainer">
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={7}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logocamapanha} alt="logo-campanha" />
            <div
              className="buttonsgroup"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                href="/login"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button variant="contained" color="primary" href="/signup">
                Cadastre-se
              </Button>
            </div>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Item>
            <img src={clouds} alt="clouds" />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Frame;
