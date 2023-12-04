import React from 'react'
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid'
import backgroundcinza from '../../asserts/backgroundcinza.png'
import logocampanhafooter from '../../asserts/logocampanhafooter.svg'

function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundcinza})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>
            <h1>teste</h1>
          </Item>
        </Grid>
        <Grid
          item
          xs={8}
          style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}
        >
          <Item>
            <img src={logocampanhafooter} alt="logo-campanha" />
            
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
