import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, addToWishlist, addToCart } from '../../../Redux/AllSlice/Product/ProductSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, Container, Grid, Box, IconButton, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { toast } from 'react-toastify';
import Loader from '../../../loader/Loader';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Single.css';

function generateStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<StarIcon key={i} color="secondary" />);
    } else {
      stars.push(<StarOutlineIcon key={i} color="secondary" />);
    }
  }
  return stars;
}

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, cart } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(selectProduct(id))
      .unwrap()
      .then((res) => {
        console.log("Single: ", res);
      })
      .catch((err) => {
        console.log("Error in single: ", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct));
    toast.success(`Added to Cart: ${selectedProduct.name}`);
    console.log("Added to Cart:", selectedProduct.name);

    setTimeout(() => {
      navigate('/addcard');
    }, 5500);
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(selectedProduct));
    toast.success(`Added to Wishlist: ${selectedProduct.name}`);
    console.log("Added to Wishlist:", selectedProduct.name);

    setTimeout(() => {
      navigate('/addwish');
    }, 5500);
  };

  const handleBuyNow = () => {
    console.log("Buy Now:", selectedProduct.name);
  };

  const [isImageHovered, setIsImageHovered] = useState(false);

  const isProductInCart = cart.some((product) => product.id === selectedProduct.id);

  return (
    <div className='single-product'>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Box mt={3} mb={3}>
            <Typography variant="h3">Product Details</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Card elevation={3}>
                <CardContent>
                  <div
                    className={`product-image-container ${isImageHovered ? 'zoomed' : ''}`}
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => setIsImageHovered(false)}
                  >
                    <img
                      src={selectedProduct.image_url}
                      alt={selectedProduct.name}
                      className="product-image"
                    />
                  </div>
                </CardContent>
                <Box p={2}>
                  <Button
                    variant="contained"
                    color="success"
                    fullWidth
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                  <Box mt={1}>
                    <IconButton
                      color="secondary"
                      aria-label="Add to Wishlist"
                      onClick={handleAddToWishlist}
                    >
                      <Typography>Add to wishlist</Typography>
                      <FavoriteIcon />
                    </IconButton>
                  </Box>
                  <Box mt={1}>
                    {isProductInCart ? (
                      <Link to="/addcard">
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          startIcon={<AddShoppingCartIcon />}
                          onClick={handleBuyNow}
                        >
                          View Cart
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleAddToCart}
                        startIcon={<AddShoppingCartIcon />}
                      >
                        Add to Cart
                      </Button>
                    )}
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h4" gutterBottom>
                    {selectedProduct.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {selectedProduct.brand}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Category: {selectedProduct.category}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Gender: {selectedProduct.gender}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Weight: {selectedProduct.weight}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Quantity: {selectedProduct.quantity}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Rating: {generateStars(selectedProduct.rating)}
                  </Typography>
                  <Typography variant="h5" mt={2}>
                    Price: ₹{selectedProduct.price}
                  </Typography>
                  <Typography variant="h6" color="error">
                    New Price: ₹{selectedProduct.newPrice}
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {selectedProduct.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default SingleProduct;