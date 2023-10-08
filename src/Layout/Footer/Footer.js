import React from 'react';
import { Container, Typography, Grid} from '@mui/material';

const footerStyle = {
  backgroundColor: "#FFC107",
  padding: '20px 0', 
  color: 'inherit', 
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
            Buy the high-quality glasses from us
More than 100 types of assortments
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@example.com
              <br />
              Phone: +1 (123) 456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2">
              <a href="https://www.facebook.com/">Facebook</a>
              <br />
              <a href="https://twitter.com/">Twitter</a>
              <br />
              <a href="https://www.instagram.com/">Instagram</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;