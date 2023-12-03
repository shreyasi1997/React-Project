import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Paper,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { profile } from '../../../Redux/AllSlice/AuthSlice/AuthSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Profile.css';
import Loader from '../../../loader/Loader';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const {
    email,
    isLoading,
    first_name,
    last_name,
    error,
    profile_pic,
  } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.products.cart) || [];

  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const profileImageUrl = profile_pic
    ? `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${profile_pic}`
    : 'placeholder_image_url.jpg'; 
    console.log(profileImageUrl)
    const capitalizedFirstName = first_name.charAt(0).toUpperCase() + first_name.slice(1);
    const capitalizedLastName = last_name.charAt(0).toUpperCase()+ last_name.slice(1)
  const menuItems = [
    { text: 'Messages', icon: 'message' },
    { text: 'Events', icon: 'event' },
    { text: 'Account Settings', icon: 'settings' },
    {
      text: 'Your Orders',
      icon: <ShoppingCartIcon />,
    },
    {
      text: 'Coupon Code' ,
      icon: 'local_offer',
    },
  ];

  return (
    <div className='profile-all'>
      <Container className="profile-container">
        <Paper elevation={3} className="profile-paper">
          <Avatar alt={first_name} src={profileImageUrl} className="profile-avatar" />
          <Typography variant="h4" gutterBottom className="profile-heading">
            {capitalizedFirstName} {capitalizedLastName}
          </Typography>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Typography variant="body1" className="error-message">
              {error.message}
            </Typography>
          ) : (
            <div className="profile-details">
              <Typography variant="body1">Email: {email}</Typography> 
             
            </div>
          )}
        </Paper>
        <Paper elevation={3} className="menu-bar">
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index} className="menu-item">
                <ListItemIcon className="menu-icon">
                  <i className={`material-icons`}>{item.icon}</i>
                </ListItemIcon>
                <ListItemText primary={item.text} className="menu-text" />
              </ListItem>
            ))}
          </List>
          <Divider />
          {cart && cart.length > 0 && (
            <List>
              <Typography variant="h6">Cart Items:</Typography>
              {cart.map((cartItem, index) => (
                <ListItem key={index} className="cart-item">
                  <Avatar alt={cartItem.name} src={cartItem.image_url} className="cart-item-avatar" />
                  <ListItemText
                    primary={cartItem.name}
                    secondary={`Quantity: ${cartItem.quantity}`}
                  />
                  <ListItemText primary={`Price: Rs ${cartItem.newPrice}`} />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default ProfilePage;