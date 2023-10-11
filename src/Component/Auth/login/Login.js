import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../../Redux/AllSlice/AuthSlice/AuthSlice';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import Loader from '../../../loader/Loader';

import './Login.css';
import {
  TextField,
  Button,
  Container,
  Typography,
  CssBaseline,
  Avatar,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  const navigate = useNavigate();

  
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const changeHandler = (e) => {
    e.persist();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const showNotification = (message, type) => {
    toast(message, { type });
  };

  const resetFormFields = () => {
    setState({ email: '', password: '' });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let formData = new FormData();
    formData.append('email', state.email);
    formData.append('password', state.password);
    
    dispatch(signin(formData))
      .then((res) => {
        console.log('status now:', res.payload.status);
        if (res.payload.status === 200) {
          // Show success notification
          window.sessionStorage.setItem("token", res.payload.token)
          showNotification('Successfully logged in!', 'success');
          navigate('/categories');
          // setTimeout(() => {
          //   navigate('/categories');
          // }, 5000);
        } else {
          // Show error notification
          showNotification('Login failed. Please try again.', 'error');
          resetFormFields(); // Reset form fields
        }
      })
      .catch((err) => {
        // Show error notification
        showNotification('Login failed. Please try again.', 'error');
        resetFormFields(); 
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after API call completes
      });
  };

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={{ marginTop: '50px' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
         
          {isLoading ? (
            <Loader />
          ) : (
            <form
              id="loginForm"
              onSubmit={submitHandler}
              style={{
                width: '100%',
                marginTop: '1rem',
                marginTop: '50px',
                backgroundColor: '#f5f5f5',
              }}
            >
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-email">Enter Your Email</InputLabel>
                <OutlinedInput
                  id="outlined-email"
                  type="email"
                  name="email"
                  onChange={changeHandler}
                  value={state.email}
                  label="Enter Your Email"
                />
              </FormControl>

              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-password">Enter Your Password</InputLabel>
                <OutlinedInput
                  id="outlined-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  onChange={changeHandler}
                  value={state.password}
                  label="Enter Your Password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={togglePasswordVisibility}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
              <Typography variant="body2" style={{ textAlign: 'center', marginTop: '16px' }}>
                Don't have an account? <Link to="/singin">Click here to sign up</Link>
              </Typography>
            </form>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Login;