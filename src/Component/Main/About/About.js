import { Container, Typography, Grid, Paper } from '@mui/material';
import React from 'react';
const About = () => {
  return (
    <div>
      <imageRow>
        <img src="assets/bannerHero.jpg" alt="Banner Image" width="100%" />
      </imageRow>
      <Container style={{ padding: '40px' }}>
        <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
          About Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', background: '#fff', borderRadius: '8px' }}>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Our Mission
              </Typography>
              <Typography variant="body1">
                At Sunglass Emporium, our mission is to provide the highest quality sunglasses that not only protect your eyes but also make you look and feel stylish. We believe that sunglasses are more than just eyewear; they are a fashion statement and a way to express your unique style.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', background: '#fff', borderRadius: '8px' }}>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Our Team
              </Typography>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="assets/team-image-1.jpg"
                    alt="Team Member 1"
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', margin: '8px' }}
                  />
                  <img
                    src="assets/team-image-2.jpg"
                    alt="Team Member 2"
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', margin: '8px' }}
                  />
                  <img
                    src="assets/team-image-3.jpg"
                    alt="Team Member 3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', margin: '8px' }}
                  />
                </div>
                <Typography variant="body1" style={{ textAlign: 'center', marginTop: '16px' }}>
                  Meet our dedicated team of eyewear enthusiasts who are passionate about helping you find the perfect pair of sunglasses. With years of experience in the industry, we are here to assist you in choosing sunglasses that match your style and protect your eyes from harmful UV rays.
                </Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: '40px' }}>
  <Grid item xs={12}>
  <Typography variant="h4" style={{ marginBottom: '16px' }}>
  Client Review
              </Typography>
    
              <iframe width="1000" height="315" src="https://www.youtube.com/embed/zwPk1fMjoGg?si=s9Hax-nDXgZAF3X6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </Grid>
</Grid>
<Typography variant="h4" style={{ marginTop: '40px', marginBottom: '16px', color: '#333', textAlign: 'center' }}>
  Our Vision
</Typography>
<Typography variant="body1" style={{ textAlign: 'center' }}>
  At Sunglass Emporium, our vision is to set new standards in eyewear by providing:
</Typography>
<ul style={{ textAlign: 'center', marginTop: '16px' }}>
  
    <Typography variant="body1">
      Cutting-edge Designs: We are committed to offering the latest and most stylish eyewear designs, setting trends in the industry.
    </Typography>
  
    <Typography variant="body1">
      High-Quality Materials: We use only the finest materials to ensure durability and comfort in every pair of sunglasses.
    </Typography>
 
    <Typography variant="body1">
      Fast Delivery: We prioritize your time, offering lightning-fast delivery to your doorstep.
    </Typography>
  
    <Typography variant="body1">
      Exceptional Customer Service: Our dedicated team is available to assist you and provide the best shopping experience.
    </Typography>
  
    <Typography variant="body1">
      Eye Health Awareness: We care about your eye health and are committed to raising awareness about the importance of UV protection.
    </Typography>
  
</ul>
<Typography variant="body1" style={{ textAlign: 'center', marginTop: '16px' }}>
  Join us on our journey to redefine eyewear and experience the Sunglass Emporium difference.
</Typography>
      </Container>
    </div>
  );
}

export default About;