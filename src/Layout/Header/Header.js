// components/Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: '#fff',
        color: '#000',
        padding: '1rem 0',
        fontFamily: 'DM Sans, sans-serif',
        boxShadow: '0 2px 4px #2133431f',
        position: 'relative',
        zIndex: 3,
        minHeight: '38px',
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          {/* Add MenuIcon or any other icon as needed */}
        
        </IconButton>
        {/* Use the Typography component to display the logo */}
        <Typography variant="h6">
          <img src='assets/logo-off.png' alt="Logo" style={{ height: '36px', width: '160px',paddingRight:'1.9rem' }} />
        </Typography>
        {/* Rest of your code */}
        <Button color="inherit" sx={{ fontSize:'0.8rem','&:hover': { color: '#000000b3' } }}>
          PRODUCTS
        </Button>
        <Button color="inherit" sx={{fontSize:'0.8rem', '&:hover': { color: '#000000b3' } }}>
          INDUSTRIES <ArrowDropDownIcon />
        </Button>
        <Button color="inherit" sx={{ fontSize:'0.8rem','&:hover': { color: '#000000b3' } }}>
        RESOURCES <ArrowDropDownIcon />
        </Button>
        <Button color="inherit" sx={{ fontSize:'0.8rem','&:hover': { color: '#000000b3' } }}>
          ABOUT <ArrowDropDownIcon />
        </Button>
        <Button color="inherit" sx={{ fontSize:'0.8rem','&:hover': { color: '#000000b3' } }}>
        HELP & SUPPORT <ArrowDropDownIcon />
        </Button>
        <Button color="inherit" sx={{ fontSize:'0.8rem','&:hover': { color: '#000000b3' } }}>
        (855) 500-0660 <ArrowDropDownIcon />
        </Button>
        <Button color="inherit" sx={{fontSize:'0.8rem', '&:hover': { color: '#000000b3' } }}>
          INDUSTRIES <ArrowDropDownIcon />
        </Button>
        <Button color="inherit" sx={{ fontSize:'0.8rem','&:hover': { color: '#000000b3' } }}>
        SIGN IN <ArrowDropDownIcon />
        </Button>
        {/* Add hover styles for other buttons as needed */}
        <Button
          color="inherit"
          sx={{
            textTransform: 'uppercase',
            fontSize:'0.8rem',
            '&:hover': {
              color: '#000000b3',
            },
          }}
          onMouseOver={handleClick}
        >
          SIGN IN <ArrowDropDownIcon />
        </Button>
        {/* Rest of your code */}
        <Button
          color="inherit"
          sx={{
            cursor: 'pointer',
            border: '1px solid #CA2118',
            color: '#ca2118',
            borderRadius: '0.3rem',
            padding: '0.5rem 0.8rem',
            '&:hover': {
              border: '1px solid #CA2118',
              backgroundColor: '#ca2118',
              color: '#fff',
            },
          }}
        >
          REQUEST DEMO
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
