import React from 'react'
import { Button, Grid, createTheme, ThemeProvider } from '@mui/material'
import Item from '@mui/material/Grid'
import logocampanhafooter from '../../asserts/logocampanhafooter.svg'
import clouds from '../../asserts/clouds.png'
import './styles.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA500', // cor laranja
    },
  },
})

function Frame() {
  return (
    <ThemeProvider theme={theme}>
      <div className="frameContainer">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            lg={5}
            xl={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Item
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img src={logocampanhafooter} alt="logo-campanha" />
              <div
                className="buttonsgroup"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '60px',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href="/login"
                  style={{
                    width: '150px',
                    marginRight: '20px',
                    color: '#FFFFFF',
                  }} // cor da fonte branca
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  href="/signup"
                  style={{ width: '150px', color: '#FFFFFF' }} // cor da fonte branca
                >
                  Cadastre-se
                </Button>
              </div>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={6}
            lg={7}
            xl={8}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Item>
              <img src={clouds} alt="clouds" />
            </Item>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default Frame
