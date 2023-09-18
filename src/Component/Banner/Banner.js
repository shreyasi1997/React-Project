import React from "react";
import { Box, colors,alpha, Typography } from "@mui/material";
import { styled} from '@mui/material/styles';

const Banner = () => {
  const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '200px',
    padding: '0',
    backgroundColor: theme.palette.primary.main, 
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    }
  }));
   const BannerContain =styled(Box)(({ theme })=>({
      display: 'flex',
      flexDirection: 'column',
      justifyContent:'center',
      padding: '10px'
   }))
   const Banerphoto =styled(Box)(({})=>({
     marginTop:"120px",
     width:"100%"
   }))
  return (
    <BannerContainer>
      <BannerContain>
          <Typography>
              Huge collection
          </Typography>
          <Banerphoto>
          <img  src="../assets/bannerHero.jpg" alt="Image 1" style={{ maxWidth: '100%', height: 'auto' }} />
          </Banerphoto>
      </BannerContain>
      
    </BannerContainer>
  );
};

export default Banner;