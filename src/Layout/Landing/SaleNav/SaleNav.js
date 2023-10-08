import React from 'react'
import { Typography } from '@mui/material'
import { AppBar,Toolbar } from '@mui/material'
const SaleNav = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#444', height: '35px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center',fontSize:"15px",marginTop:"-25px"}}>
        20% OFF ON SECOND PAIR
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default SaleNav