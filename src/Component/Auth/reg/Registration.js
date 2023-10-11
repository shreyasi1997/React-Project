import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../../Redux/AllSlice/AuthSlice/AuthSlice';
import './Registration.css';
import { Link } from 'react-router-dom';
import Loader from '../../../loader/Loader';
import Swal from 'sweetalert2'; 
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
  InputAdornment,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

const SignIn = () => {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    ph_no: '',
    password: '',
    photo: '',
    isError: {
      first_name: '',
      last_name: '',
      email: '',
      ph_no: '',
      password: '',
    },
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  const changeHandler = (e) => {
    e.persist();
    const { name, value } = e.target;
    const err = { ...state.isError };

    switch (name) {
      case 'first_name':
        err.first_name = value.length <= 0 ? 'Required field' : value.length < 3 ? 'Minimum 3 characters' : '';
        break;
      case 'last_name':
        err.last_name = value.length <= 0 ? 'Required field' : value.length < 3 ? 'Minimum 3 characters' : '';
        break;
      case 'email':
        err.email = value.length <= 2 ? 'Required field' : '';
        break;
      case 'ph_no':
        err.ph_no = value.length <= 9 ? 'Please enter a valid mobile number (e.g., 9987XXXXXX)' : '';
        break;
      case 'password':
        err.password = value.length <= 0 ? 'Required field' : '';
        break;
      default:
        console.log('No error');
    }

    setState({ ...state, [name]: value, isError: err });
  };

  const handlePhotoChange = (e) => {
    const photo = e.target.files[0];
    setState({ ...state, photo });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const showSweetAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  const showNotification = (message, type) => {
    toast(message, { type });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (state.password !== confirmPassword) {
      showNotification('Error: Passwords do not match', 'error');
      return;
    }

    setIsLoading(true); 

    let formdata = new FormData();
    formdata.append('first_name', state.first_name);
    formdata.append('last_name', state.last_name);
    formdata.append('email', state.email);
    formdata.append('password', state.password);
    formdata.append('photo', state.photo);
    
    dispatch(signup(formdata))
      .then((res) => {
        console.log('status now:', res.payload.status);
        if (res.payload.status === 200) {
          // Show success notification
          showNotification('Congrats: Registration Done', 'success');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
         
          showNotification('Error: Registration failed. Please try again.', 'error');
        }
      })
      .catch((err) => {
       
        showNotification('Error: Registration failed. Please try again.', 'error');
      })
      .finally(() => {
        setIsLoading(false); 
      });
  };

  return (
    <div className="Regis">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <div className="line">
            <Typography variant="h4" align="center">
              Create an Account
            </Typography>
          </div>
          <form onSubmit={submitHandler}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="first_name"
                  label="First Name*"
                  name="first_name"
                  value={state.first_name}
                  onChange={changeHandler}
                  error={state.isError.first_name.length > 0}
                  helperText={state.isError.first_name}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="last_name"
                  label="Last Name*"
                  name="last_name"
                  value={state.last_name}
                  onChange={changeHandler}
                  error={state.isError.last_name.length > 0}
                  helperText={state.isError.last_name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="ph_no"
                  label="Mobile*"
                  name="ph_no"
                  type="number"
                  value={state.ph_no}
                  onChange={changeHandler}
                  error={state.isError.ph_no.length > 0}
                  helperText={state.isError.ph_no}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email*"
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={changeHandler}
                  error={state.isError.email.length > 0}
                  helperText={state.isError.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="password"
                  label="Password*"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={state.password}
                  onChange={changeHandler}
                  error={state.isError.password.length > 0}
                  helperText={state.isError.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button onClick={togglePasswordVisibility}>
                          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password*"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={state.password !== confirmPassword}
                  helperText={state.password !== confirmPassword ? 'Passwords do not match' : ''}
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  style={{ marginTop: '16px' }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              {isLoading ? <Loader /> : 'Create an Account'}
            </Button>
            <Typography variant="h5" fontSize="20px">
              Don't Have an Account? <Link to="/login"> <Button>Sign-up
              </Button></Link>
            </Typography>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;