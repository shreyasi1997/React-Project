import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
} from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const OrderDone = () => {
  const navigate =useNavigate();
  setTimeout(()=>{
    navigate('/categories')
  },3000)
  return (
      <div>
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px' ,marginTop: '20px'}}>
        
          <Typography variant="h5" gutterBottom>
            Order Successful!
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for your order. Your order has been successfully
            placed.
          </Typography>
          <img
            src="assets/success-order.gif" 
            alt="Success"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Continue Shopping
          </Button>
        
      
      </Paper>
    </Container>
    </div>
  );
};

export default OrderDone;


