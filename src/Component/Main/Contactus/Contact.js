import React from 'react';
import { Typography, Box } from '@mui/material';

const CustomCard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/ezZCpFogQkQ?si=upfPIfy_5cqluDQH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
      <Box>
        <Typography variant='h2' sx={{lineHeight: '1.4', fontSize:'calc(1.295rem + .405vw)'}}>A Customer Story: Seminole Tribe of Florida</Typography>
        <Typography>Seminole Tribe of Florida - A Customer Story</Typography>
        <Typography>
          JT Stacy, the TW Director of Facility Management at Seminole Tribe of Florida, was operating from a facilities zero-knowledge base when he began working for The Seminole Tribe nearly a decade ago because he and his team had no floor plans and no way of knowing how, where, and when to maintain thousands of pieces of equipment. He literally was operating blind when it came to properly managing facilities.
        </Typography>
        <Typography>Watch the video to learn more.</Typography>
      </Box>
    </Box>
  );
};

export default CustomCard;
