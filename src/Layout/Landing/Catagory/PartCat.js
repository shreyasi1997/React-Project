import React, { useState } from 'react';
import { Grid, Paper, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './partcat.css'

const styles = {
  paper: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '#f9f9f9',
    position: 'relative',
  },
  image: {
    width: '100%',
    maxHeight: '250px',
    objectFit: 'cover',
    backgroundColor: '#D3D3D3',
    transition: 'opacity 0.3s ease',
    MarginBottom: "12px"
  },
  categoryName: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    padding: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
    opacity: 0, 
    transition: 'opacity 0.3s ease',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
 
};

const PartCat = () => {
  const catData = [
    { id: 1, category: 'Vision', imageUrl: "assets/categories/sports-banner.jpg" },
    { id: 2, category: 'Sports', imageUrl: "assets/categories/sunglasses-banner.jpg" },
    { id: 3, category: 'Sunglasses', imageUrl: "assets/categories/vision-banner.jpg" },
  ];

  const handleMouseEnter = (event) => {
    event.currentTarget.querySelector('.categoryName').style.opacity = '1';
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector('.categoryName').style.opacity = '0';
  };

  return (
    <Container>
      <div className="trending-section">
        <Typography variant="h4" gutterBottom>
          All Category
        </Typography>
      </div>
      <Grid container spacing={3}>
        {catData.map((sunglasses) => (
          <Grid item xs={12} sm={6} md={4} key={sunglasses.id}>
            <Paper elevation={3} style={styles.paper}>
              <div
                style={styles.imageContainer}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={sunglasses.imageUrl}
                  alt={sunglasses.category}
                  style={styles.image}
                />
                <div className="categoryName" style={styles.categoryName}>
                  {sunglasses.category}
                  <Link to="/categories">
                    <Button variant="contained">
                      View Products
                    </Button>
                  </Link>
                </div>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PartCat;