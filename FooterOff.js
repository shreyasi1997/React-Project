import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const footerStyle = {
  backgroundColor: '#000',
  color: '#fff',
  padding: '2rem', // Adjust as needed
};

const logoStyle = {
  width: '150px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
};

const sectionStyle = {
  marginBottom: '1rem',
};

const clickableSectionStyle = {
  ...sectionStyle,
  cursor: 'pointer',
  transition: 'background-color 0.3s', 
};

const productSectionStyle = {
  ...clickableSectionStyle,
  marginTop: '0.5rem',
  textIndent: 0,
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={4} style={sectionStyle}>
          <Grid item xs={12} md={2}>
            <img src="/path/to/your/logo.png" alt="ARC Facilities" style={logoStyle} />
          </Grid>
          <Grid item xs={12} md={2} style={clickableSectionStyle}>
            <a href="#" style={linkStyle}>
              <Typography variant="h5">PRODUCTS</Typography>
            </a>
            <Typography variant="body2" style={productSectionStyle}>
              Building Plans
            </Typography>
            <Typography variant="body2" style={productSectionStyle}>
              Emergency Information
            </Typography>
            <Typography variant="body2" style={productSectionStyle}>
              Healthcare Compliance
            </Typography>
            <Typography variant="body2" style={productSectionStyle}>
              O&M Documentation
            </Typography>
            <Typography variant="body2" style={productSectionStyle}>
              Construction Projects
            </Typography>
            <Typography variant="body2" style={productSectionStyle}>
              Legacy Documents
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} style={clickableSectionStyle}>
            <a href="#" style={linkStyle}>
              <Typography variant="h5">INDUSTRIES</Typography>
            </a>
          </Grid>
          <Grid item xs={12} md={2} style={clickableSectionStyle}>
            <a href="#" style={linkStyle}>
              <Typography variant="h5">RESOURCES</Typography>
            </a>
          </Grid>
          <Grid item xs={12} md={2} style={clickableSectionStyle}>
            <a href="#" style={linkStyle}>
              <Typography variant="h5">ABOUT</Typography>
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;