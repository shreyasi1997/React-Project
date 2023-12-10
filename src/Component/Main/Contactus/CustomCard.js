import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Paper } from '@mui/material';

const CustomCard = () => {
  const cardStyle = {
    margin: '20px',
  };

  const paperStyle = {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio for video
    backgroundColor: '#000',
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  const textStyle = {
    fontFamily: 'DM Sans, sans-serif',
    color: '#0e1924',
    fontWeight: 500,
    marginTop: 0,
    marginBottom: '10px',
    letterSpacing: '-.5px',
    cursor: 'pointer',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    fontFamily: 'Roboto, sans-serif',
    color: '#3f4b5c',
    fontWeight: 400,
  };

  const buttonStyle = {
    color: '#ca2118',
    display: 'inline-block',
    textDecoration: 'none',
    marginTop: '1rem',
    padding: 0,
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Grid container spacing={3}>
          {[1, 2, 3, 4, 5, 6, 7].map((row) => (
            <Grid item xs={4} key={row}>
              {/* Video Frame */}
              <Paper style={paperStyle}>
                {/* You can replace the iframe source with your actual video source */}
                <iframe
                  title={`Video ${row}`}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/your-video-id"
                  frameBorder="0"
                  allowFullScreen
                  style={iframeStyle}
                />
              </Paper>

              {/* Text below video */}
              <Typography variant="h6" style={textStyle}>
                Your Text Here
              </Typography>

              {/* p tag */}
              <Typography variant="body1" style={paragraphStyle}>
                Your paragraph text here.
              </Typography>

              {/* Button */}
              <Button variant="contained" style={buttonStyle}>
                Your Button
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
