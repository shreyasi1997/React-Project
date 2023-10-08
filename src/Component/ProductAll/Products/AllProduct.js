import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../Redux/AllSlice/Product/ProductSlice';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterIcon from '@mui/icons-material/FilterList';
import Loading from './Loading';
import './AllProd.css';

const AllProduct = () => {
  const { isLoading, error, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState('lowToHigh');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9); // Number of products to display per page
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      const sorted = [...products];
      if (sortBy === 'lowToHigh') {
        sorted.sort((a, b) => a.newPrice - b.newPrice);
      } else if (sortBy === 'highToLow') {
        sorted.sort((a, b) => b.newPrice - a.newPrice);
      }
      setSortedProducts(sorted);
    }
  }, [products, sortBy]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <div className="filter-button-container">
        <IconButton
          color="inherit"
          aria-label="filter"
          onClick={toggleDrawer}
        >
          <FilterIcon />
          <Typography>Filter</Typography>
        </IconButton>
      </div>
      <Typography variant="h4" gutterBottom>
        All Products
      </Typography>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem
              button
              onClick={() => {
                setSortBy('lowToHigh');
                toggleDrawer();
              }}
            >
              <ListItemText primary="Low to High Price" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                setSortBy('highToLow');
                toggleDrawer();
              }}
            >
              <ListItemText primary="High to Low Price" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fast Delhivery" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Easy Return" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Chose by Color" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Unlimited Offer" />
            </ListItem>
          </List>
          
          
          <IconButton
            edge="end"
            color="inherit"
            onClick={toggleDrawer}
            aria-label="close"
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Drawer>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          {currentProducts.map((product, index) => (
            <Grid item key={product._id} xs={12} sm={6} md={4} lg={4}>
              <Card elevation={3} sx={{ backgroundColor: '#f7f7f7' }}>
                <Link to={`single/${product.id}`} className="product-link">
                  <div className="product-image-container">
                    <img
                      src={product.image_url}
                      alt={product.category}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        backgroundColor: '#D3D3D3',
                      }}
                    />
                  </div>
                </Link>
                <CardContent>
                  <Typography variant="h6">{product.category}</Typography>
                  <div className="product-details">
                    <Typography variant="body1" color="textSecondary">
                      <span className="highlight-price">₹{product.newPrice}</span>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      style={{ textDecoration: 'line-through' }}
                    >
                      ₹{product.price}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`single/${product.id}`}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    View Details
                  </Button>
                </CardActions>
                {((index + 1) % 5 === 0) && (
  <div className="best-sale-highlight">
    <div className="best-sale-ribbon">Best Sale</div>
  </div>
)}
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <div className="pagination-container">
        <ul className="pagination">
          {Array.from({ length: Math.ceil(sortedProducts.length / productsPerPage) }, (_, i) => (
            <div key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(i + 1)} className="page-link">
                {i + 1}
              </button>
            </div>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default AllProduct;