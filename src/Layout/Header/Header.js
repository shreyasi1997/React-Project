import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Container, Box } from "@mui/material";
import Menu from "@mui/material/Menu";
import { styled, alpha } from '@mui/material/styles';
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from '@mui/icons-material/Work';
import { Link } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Banner from "../../Component/Banner/Banner";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: '#999',
      },
    },
  });
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 2, 1, 1),
    
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '25ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="logo" >
            <img src="../assets/defaultUser.png" alt="Logo" width="100" height="25" />
            </IconButton>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Glasses and lenses"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Typography>
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/sing-in">
                <Button color="inherit">Explore</Button>
              </Link>
              <Link to="/">
                <Button color="inherit">Track Order</Button>
              </Link>
              <BookmarkIcon/>
              <WorkIcon/>
            </Stack>
            {/* Menu icon */}
            <IconButton
              size="large"
              edge="start"
              color="#ffebee"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
         
            {/* Menu list */}
            <Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="left" component="div">
                    <Stack direction="column" spacing={2}>
                      <Link to="/about">
                        <Button color="primary">About</Button>
                      </Link>
                    </Stack>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Banner/>
    </ThemeProvider>
   
  );
};

export default Header;