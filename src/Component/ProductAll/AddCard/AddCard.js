import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeToCard } from '../../../Redux/AllSlice/Product/ProductSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import the cart icon
import { incrementCartItem, decrementCartItem } from '../../../Redux/AllSlice/Product/ProductSlice';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import './Addcart.css';

const Cart = () => {
  const cart = useSelector((state) => state.products.cart) || [];
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    // Calculate and update the total quantity when cart changes
    const newTotalQuantity = cart.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeToCard(productId));
  };

  const handleToggleQuantity = (productId, isIncrement) => {
    if (isIncrement) {
      dispatch(incrementCartItem(productId));
    } else {
      dispatch(decrementCartItem(productId));
    }
  };

  const totalPayment = cart.reduce((total, product) => {
    return total + product.quantity * product.newPrice;
  }, 0);

  // Calculate the total quantity of "glass" products in the cart
  const totalGlassQuantity = cart.reduce((total, product) => {
    if (product.name.toLowerCase() === 'glass') {
      return total + product.quantity;
    }
    return total;
  }, 0);

  // Apply a 20% discount if the total glass quantity is greater than or equal to 2
  const discount = totalGlassQuantity >= 2 ? 0.2 : 0; // 20% discount if 2 or more glasses

  // Calculate the discounted amount
  const discountAmount = totalPayment * discount;

  const applyCouponCode = () => {
    // Implement your coupon code validation logic here
    // For example, check if the coupon code is valid
    // You can replace this with your actual logic
    if (couponCode === 'DIS20' && cart.length > 1)  {
      // Apply a 20% discount
      setAppliedDiscount(0.2);
    } else {
      // Invalid coupon code
      setAppliedDiscount(0);
    }
  };

  // Calculate the total payment with the discount applied
  const discountedTotalPayment = totalPayment - discountAmount;

  return (
    <div className='cart'>
       {/* <div className='cart-icon'>
        <ShoppingCartIcon />
        <span className='cart-quantity'>{totalQuantity}</span>
      </div> */}
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='500px'
      >
        {cart.length === 0 ? (
          <div>
            <img
              src='assets/empty-shopping-bag.png'
              alt='Empty Cart'
              style={{ width: '200px', height: '200px' }}
            />
            <Typography variant='body1'>Your cart is empty.</Typography>
          </div>
        ) : (
          <table className='cart-table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className='product-image'
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>₹{product.newPrice}</td>
                  <td>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => handleToggleQuantity(product.id, false)}
                      className='quantity-button'
                    >
                      -
                    </Button>
                    <span className='product-quantity'>{product.quantity}</span>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={() => handleToggleQuantity(product.id, true)}
                      className='quantity-button'
                    >
                      +
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant='contained'
                      color='error'
                      onClick={() => handleRemoveFromCart(product.id)}
                      className='remove-button'
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">
                  {totalGlassQuantity >= 2 && (
                    <div className='coupon-code'>
                      Coupon Code: DISCOUNT20 (20% off applied)
                    </div>
                  )}
                </td>
                <td>Total:</td>
                <td className='total-amount'>
                  ₹{(discountedTotalPayment - (discountedTotalPayment * appliedDiscount)).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan="5" className="coupon-input">
                  <input
                    type="text"
                    placeholder="Enter Coupon Code (DIS20)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={applyCouponCode}
                  >
                    Apply Coupon
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
        {/* Conditionally render the "Pay Now" button */}
        {cart.length > 0 && (
          <div className='pay-button'>
            <Link to="/payment"><button>Pay-Now</button></Link>
          </div>
        )}
      </Box>
    </div>
  );
};

export default Cart;