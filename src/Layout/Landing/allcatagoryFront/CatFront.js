import React from 'react';
import { Grid, Paper, Typography, Container } from "@mui/material";

const sunglassesData = [
  { id: 1, imageUrl: "assets/sports/sports1.png", name: "Ardor Aviator", price: "1999" },
  { id: 2, imageUrl: "assets/sports/sports2.png", name: "Caper Active", price: "1299" },
  { id: 3, imageUrl: "assets/sports/sports8.png", name: "Alder Street", price: "1099" },
  { id: 4, imageUrl: "assets/sunglasses/sun1.png", name: "Black Boss", price: "999" },
  { id: 5, imageUrl: "assets/sunglasses/sun2.png", name: "Hip Hop Candy", price: "1999" },
  { id: 6, imageUrl: "assets/sunglasses/sun3.png", name: "Punk Cut out", price: "2999" },
  { id: 7, imageUrl: "assets/vision/vision1.png", name: "Rounded Gold", price: "999" },
  { id: 8, imageUrl: "assets/vision/vision2.png", name: "Rounded Flick", price: "1929" },
  { id: 9, imageUrl: "assets/vision/vision3.png", name: "Rounded Band", price: "1099" },
];

const CatFront = () => {

  return (
    <Container>
      <div className="trending-section">
        <Typography variant="contained" color="secondary" fontSize="30px" gutterBottom>
          Trending Products
        </Typography>
      </div>
      <Grid container spacing={3}>
        {sunglassesData.map((sunglasses) => (
          <Grid item xs={12} sm={6} md={4} key={sunglasses.id}>
            <Paper elevation={3} style={{ padding: "16px", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f9f9f9", marginTop:'20px' }}>
              <div>
                <Typography variant="h6" style={{ marginBottom: "8px", fontWeight: "bold" }}>
                  {sunglasses.name}
                </Typography>
              </div>
              <div>
                <Typography variant="subtitle1" style={{ color: "#ff5722", fontSize: "1.25rem" }}>
                ₹{sunglasses.price}
                </Typography>
              </div>
              <img
                src={sunglasses.imageUrl}
                alt={sunglasses.name}
                style={{ width: "100%", maxHeight: "250px", objectFit: "cover", backgroundColor: "#D3D3D3" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CatFront;