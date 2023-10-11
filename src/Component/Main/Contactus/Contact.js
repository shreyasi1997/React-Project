import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

   

    
        // Show a success message 
        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: 'Your message has been sent successfully.',
        });
      }
       
  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '500px' }}>
      <div>
        <img src="assets/bannerHero.jpg" alt="Banner Image" width="100%" />
      </div>

      <Container style={{ padding: '40px' }}>
        <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '20px', color: '#333', textAlign: 'center' }}>
          Contact Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', background: '#fff', borderRadius: '8px' }}>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Send Us a Message
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                  Send Message
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="assets/some-image.png"
              alt="contact image"
              style={{ width: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '8px', height: "400px" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ width: '100%', height: '300px' }}>
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7964359535967!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xYOUR_LATITUDE%2C+YOUR_LONGITUDE!2sYour+Location!5e0!3m2!1sen!2sus!4vYOUR_MAP_EMBED_CODE"
                allowFullScreen
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', background: '#fff', borderRadius: '8px' }}>
              <Typography variant="h4" style={{ marginBottom: '16px' }}>
                Our office timing
              </Typography>
              <Typography variant="body1">
                <ul>
                 Monday to Friday: 10am to 9 pm
                  Saturday : 10am to 5 pm
                  Sunday is a holiday
                 Call us: 9051743756;
                  email us: example@gmail.com
                
                    We have been helping global companies and established brands
                    reimagine their business by building
                 
                    We have been helping global companies and established brands
                    reimagine their business by building.
                  
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;