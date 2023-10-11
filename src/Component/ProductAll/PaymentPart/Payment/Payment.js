import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {clearCart} from '../../../../Redux/AllSlice//Product/ProductSlice'
import {
  Paper,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import './Payment.css';
const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const cart = useSelector((state) => state.products.cart) || [];
  const { first_name} = useSelector((state) => state.auth);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [formErrors, setFormErrors] = useState({});
  const capitalizedFirstName = first_name.charAt(0).toUpperCase() + first_name.slice(1);
const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  const handleChanger = ()=>{
       dispatch(clearCart())
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!event.target.cardholderName.value) {
      errors.cardholderName = 'Cardholder name is required';
    }

    if (!event.target.cardNumber.value || event.target.cardNumber.value.length !== 16) {
      errors.cardNumber = 'Invalid  card should be 16 digit';
    }

    if (!event.target.expirationDate.value) {
      errors.expirationDate = 'Expiration date is required';
    }

    if (!event.target.cvv.value || event.target.cvv.value.length !== 3) {
      errors.cvv = 'Invalid CVV';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    Swal.fire({
      icon: 'success',
      // title: 'Payment Successful',
      title: (`Congrats ${capitalizedFirstName} Your Order is Confirm.`)
    }).then(() => {

     navigate('/orderDone')
     handleChanger()

    });
  };

  return (
    <div className="pay">
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '16px', marginTop: '50px' }}>
          <Typography variant="h5" gutterBottom>
            Payment Details
          </Typography>
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cardholder Name"
                  variant="outlined"
                  required
                  name="cardholderName"
                />
                {formErrors.cardholderName && (
                  <div className="error-message">{formErrors.cardholderName}</div>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Card Number"
                  variant="outlined"
                  required
                  name="cardNumber"
                />
                {formErrors.cardNumber && (
                  <div className="error-message">{formErrors.cardNumber}</div>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Expiration Date"
                  variant="outlined"
                  required
                  name="expirationDate"
                />
                {formErrors.expirationDate && (
                  <div className="error-message">{formErrors.expirationDate}</div>
                )}
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="CVV" variant="outlined" required name="cvv" />
                {formErrors.cvv && <div className="error-message">{formErrors.cvv}</div>}
              </Grid>
            </Grid>

            <RadioGroup
              name="paymentMethod"
              value={paymentMethod}
              onChange={handlePaymentMethodChange}
            >
              <FormControlLabel
                value="creditCard"
                control={<Radio />}
                label="Credit Card"
              />
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery (COD)"
              />
              <FormControlLabel
                value="gp"
                control={<Radio />}
                label="Google Pay (GP)"
              />
              <FormControlLabel
                value="phonePe"
                control={<Radio />}
                label="PhonePe"
              />
            </RadioGroup>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '16px' }}
            >
              Pay Now
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Payment;