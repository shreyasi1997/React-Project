import React from 'react';
import Slider from 'react-slick';
import { Paper, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SalCar.css';

const SaleCarousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const saleItems = [
    { id: 1, title: 'Sale 1', description: 'Save 20% off', image: 'sale1.webp' },
    { id: 2, title: 'Sale 2', description: 'Limited-time offer', image: 'sale19.jpeg' },
    { id: 3, title: 'Sale 3', description: 'Huge discounts', image: 'sale10.jpg' },
  ];

  return (
    <div className="sale-carousel-container">
      <Typography variant="h4" className="super-offer-heading" style={{ color: '#FF5733', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px' }}>
        Super Offer
      </Typography>
      <Slider {...carouselSettings}>
        {saleItems.map((item) => (
          <div key={item.id}>
            <Paper className="carousel-item">
              <img
                src={`assets/${item.image}`}
                alt={item.title}
                className="carousel-image"
                style={{ height: '300px', objectFit: 'cover' }} 
              />
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="body1">{item.description}</Typography>
            </Paper>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SaleCarousel;