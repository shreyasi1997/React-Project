import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../../../Redux/AllSlice/Product/ProductSlice';
import './Addwish.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.products.wishlist) || [];
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
  };

  const [showMoreOffer, setShowMoreOffer] = useState(false);

  const toggleShowMoreOffer = () => {
    setShowMoreOffer(!showMoreOffer);
  };

  return (
    <div className='wish'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        height='500px'
        marginTop="180px"
      >
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Your Wishlist
        </Typography>
        {wishlist.length === 0 ? (
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6}>
                <img
                  src='assets/empty-wish.gif'
                  alt='Empty Wishlist'
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" color="textSecondary">
                  Wishlist is empty.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <>
            <Grid container spacing={3} justifyContent="center">
              {wishlist.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card elevation={3}>
                    <CardMedia
                      component="img"
                      alt={product.name}
                      height="200"
                      image={product.image_url}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {product.name}
                      </Typography>
                      <Box display="flex" alignItems="center" marginBottom="8px">
                        <VisibilityIcon style={{ marginRight: '4px' }} />
                        <Typography variant="body2" color="textSecondary">
                          212 people viewed
                        </Typography>
                      </Box>
                      <Typography variant="body1">₹{product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant='contained'
                        color='error'
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Show More Offer */}
            <Button
              variant="outlined"
              color="primary"
              style={{ marginTop: '20px' }}
              onClick={toggleShowMoreOffer}
            >
              {showMoreOffer ? 'Show Less Offers' : 'Show More Offers'}
            </Button>

            {showMoreOffer && (
              <Paper elevation={3} style={{ marginTop: '30px', padding: '20px', width: '80%' }}>
                <Typography variant="h5" style={{ marginBottom: '10px' }}>
                  Available Offers
                </Typography>
                <Typography variant="body2">20% off on all sunglasses</Typography>
                <Typography variant="body2">Free shipping on orders over ₹500</Typography>
                <Typography variant="body2">Buy 1, Get 1 free on selected items</Typography>
              </Paper>
            )}

           
          </>
        )}
      </Box>
    </div>
  );
};

export default Wishlist;