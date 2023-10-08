import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { deletion } from "../../Redux/AllSlice/AuthSlice/AuthSlice";
import "./Header.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify

import "react-toastify/dist/ReactToastify.css"; // Add Toastify CSS

const Header = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC107",
      },
    },
  });

  const Search = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
  }));

  // const user = useSelector((state) => state.auth);
  let authToken=window.sessionStorage.getItem('token')
  console.log("AuthToken: ",authToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const cart = useSelector((state) => state.products.cart) || [];
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Calculate and update the total quantity when cart changes
    const newTotalQuantity = cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const handleLogout = () => {
    window.sessionStorage.clear("token");
    dispatch(deletion());
    
    // Show a logout success message
    toast.success("Logged out successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
    // Redirect to the login page
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");

    // Show a login success message
 
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Box w={{ lg: "20%", md: "20%", sm: "22%", base: "30%" }}>
              <Link to="/">
                <img
                  src="assets/logo5.png"
                  alt="logo"
                  className="logo-image"
                  style={{
                    width: "15%",
                    maxWidth: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </Link>
            </Box>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                  marginRight: "50px",
                }}
              >
                <Stack direction="row" spacing={1}>
                  <Link
                    to="/about"
                    className={`link ${
                      location.pathname === "/about" ? "activeLink" : ""
                    }`}
                  >
                    <Button color="inherit">About</Button>
                  </Link>
                  <Link
                    to="/categories"
                    className={`link ${
                      location.pathname === "/categories" ? "activeLink" : ""
                    }`}
                  >
                    <Button color="inherit">Categories</Button>
                  </Link>
                  <Link
                    to="/profile"
                    className={`link ${
                      location.pathname === "/profile" ? "activeLink" : ""
                    }`}
                  >
                    <Button color="inherit">Profile</Button>
                  </Link>

                  <Link
                    to="/contact-us"
                    className={`link ${
                      location.pathname === "/contact-us" ? "activeLink" : ""
                    }`}
                  >
                    <Button color="inherit">Contact Us</Button>
                  </Link>
                  {authToken && authToken!==null ? (
                    <Button color="inherit" onClick={handleLogout}>
                      Logout
                    </Button>
                  ) : (
                    <Button color="inherit" onClick={handleLogin}>
                      Login
                    </Button>
                  )}
                </Stack>
              </Box>
            </Typography>
            <Search>
              <SearchIcon />
              <InputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Link to="/addcard">
              <IconButton
                edge="end"
                color="inherit"
                aria-label="shopping-cart"
              >
                <ShoppingCartIcon />
                <span className="cart-quantity">
                  {totalQuantity !== 0 ? totalQuantity : ""}
                </span>
              </IconButton>
            </Link>
            <Link to="/addwish">
              <IconButton edge="end" color="inherit" aria-label="bookmark">
                <FavoriteIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      {/* Add the ToastContainer at the end of your component */}
      <ToastContainer />
    </>
  );
};

export default Header;