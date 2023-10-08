import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CatFront from "../allcatagoryFront/CatFront";
import PartCat from "../Catagory/PartCat";
import SaleNav from "../SaleNav/SaleNav";
import SaleCar from "../Catagory/SalePart/SaleCar"
import './Banner.css'
const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#000000",
  padding: "10px",
  height: "300px",
}));
const ContentContainer = styled(Box)({
  flex: 1,
});
const ImageContainer = styled(Box)({
  flex: 1,
  textAlign: "center",
});
const ButtonContainer = styled(Box)({
  marginTop: "20px", 
});
const BannerSale = styled(Box)({
  
});
const Catagory=styled(Box)({
  MarginTop:"30px"
})
const NextCat=styled(Box)({
   MarginLeft: "40px",
   MarginTop: "30px",
   MarginBottom: "12px"
   
})
const NextDSale=styled(Box)({
  marginLeft: "0",
  
})
const Banner = () => {
  return (
    <>
    <div className="bann">
     <BannerSale>
         <SaleNav/>
      </BannerSale>
    <BannerContainer>
      <ContentContainer>
        <Typography variant="h4">Glasses & lenses</Typography>
        <Typography variant="body1">
          Buy the high-quality glasses from us
          <br />
          More than 100 types of assortments
        </Typography>
        <ButtonContainer>
        <Link to="/categories">
          <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
           Start Shoping
          </Button>
          </Link>
          <Link to="/singin">
          <Button variant="contained" color="secondary">
            Explore More
          </Button>
          </Link>
        </ButtonContainer>
      </ContentContainer>
     
      <ImageContainer>
        <img src="assets/bannerImg.png" alt="Banner Image" width="50%" />
      </ImageContainer>
      </BannerContainer> 
      <Catagory>
        <CatFront/>
      </Catagory>
      <NextDSale>
      <SaleCar/>
      </NextDSale> 
      <NextCat>
        <PartCat/>
      </NextCat>
      
      </div>
      </>
  );
};

export default Banner



