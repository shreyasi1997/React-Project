// import React from 'react';
// import { Card, CardContent, Typography, Button, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const cardStyle = {
//   margin: '25px',
//   border: '1px solid #fff',
//   borderRadius: '8px',
// };

// const paperStyle = {
//   position: 'relative',
//   paddingBottom: '56.25%',
//   backgroundColor: '#000',
// };

// const iframeStyle = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
// };

// const textStyle = {
//   fontFamily: 'DM Sans, sans-serif',
//   color: '#0e1924',
//   fontWeight: 280,
//   marginTop: '18px',
//   marginBottom: '10px',
//   cursor: 'pointer',
//   textAlign: 'justify',
//   letterSpacing: '-0.9px',
// };

// const paragraphStyle = {
//   fontSize: '1rem',
//   fontFamily: 'Roboto, sans-serif',
//   color: '#3f4b5c',
//   fontWeight: 400,
//   textAlign: 'justify',
// };

// const buttonStyle = {
//   color: '#ca2118',
//   display: 'block', // Change to 'block' to align to the left
//   textDecoration: 'none',
//   textAlign: 'left', // Align text to the left
//   marginTop: '20px',
//   padding: 0,
// };

// const contentData = [
//   {
//     videoSrc: 'https://www.youtube.com/embed/your-video-id-1',
//     text: 'A Customer Story: Seminole Tribe of Florida',
//     paragraph: 'JT Stacy, the TW Director of Facility Management at Seminole Tribe of Florida.',
//   },
//   {
//     videoSrc: 'https://www.youtube.com/embed/your-video-id-2',
//     text: 'Text for Card 2',
//     paragraph: 'Paragraph content for Card 2.',
//   },
//   {
//     videoSrc: 'https://www.youtube.com/embed/your-video-id-3',
//     text: 'Text for Card 3',
//     paragraph: 'Paragraph content for Card 3.',
//   },
//   // Add more content data for each card...
// ];

// const CustomCard = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = (videoSrc) => {
//     window.open(videoSrc, '_blank'); // Open the video in a new tab
//   };

//   const handleHeaderClick = (index) => {
//     navigate(`/textPage${index + 1}`);
//   };

//   return (
//     <Grid container spacing={0} justifyContent="center">
//       {contentData.map((content, index) => (
//         <Grid item xs={4} key={index}>
//           <Card style={cardStyle}>
//             <CardContent>
//               <Paper style={paperStyle}>
//                 <iframe
//                   title={`Video ${index + 1}`}
//                   width="100%"
//                   height="100%"
//                   src={content.videoSrc}
//                   frameBorder="0"
//                   allowFullScreen
//                   style={iframeStyle}
//                 />
//               </Paper>

//               <Typography variant="h6" style={{ ...textStyle, cursor: 'pointer' }} onClick={() => handleHeaderClick(index)}>
//                 {content.text}
//               </Typography>

//               <Typography variant="body1" style={paragraphStyle}>
//                 {content.paragraph}
//               </Typography>

//               {/* Button */}
//               <Button style={buttonStyle} onClick={() => handleButtonClick(content.videoSrc)}>
//                 WATCH VIDEO
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default CustomCard;
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
  padding: '1rem',
  overflow: 'hidden',
  boxShadow: '0 0 50px 3px #0000000f',
  textAlign: 'center',
  background: '#fff',
  margin: '10px 50px',
  marginRight: '30px',
  marginLeft: '30px',
};

const cardIconStyle = {
  fontSize: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  minWidth: '60px',
  height: '60px',
  borderRadius: '100%',
  border: '1px solid rgba(117, 117, 117, .6)',
  margin: '0 auto',
};

const h6Style = {
  fontFamily: 'DM Sans, sans-serif',
  color: '#0e1924',
  fontWeight: 500,
  marginTop: 0,
  marginBottom: '10px',
  letterSpacing: '-.5px',
};

const bodyStyle = {
  margin: '0',
  padding: '0',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '16px',
  color: '#000',
  backgroundColor: '#fff',
  WebkitTextSizeAdjust: '100%',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  textRendering: 'optimizeSpeed',
  lineHeight: '1.5',
};

const buttonStyle = {
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',
  borderRadius: '0.25rem',
  padding: '0.8rem calc(1.275rem + 0.225vw)',
  fontSize: '0.9rem',
  fontWeight: 700,
  color: '#ca2118',
};

const cardData = [
  {
    title: 'Healthcare',
    body:
      'Hospitals operate 24/7/365 and they’re constantly growing and expanding to accommodate patient’s needs. When facility equipment fails, patient health suffers. Hospitals are subject to annual surveys, so keeping healthcare compliance documentation up to date and in order are ongoing concerns. ARC Facilities provides hospital facility teams fast access to building and renovation changes, healthcare compliance documentation and emergency information.',
  },
  { title: 'Higher Education', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  {
    title: 'Healthcare',
    body:
      'Hospitals operate 24/7/365 and they’re constantly growing and expanding to accommodate patient’s needs. When facility equipment fails, patient health suffers. Hospitals are subject to annual surveys, so keeping healthcare compliance documentation up to date and in order are ongoing concerns. ARC Facilities provides hospital facility teams fast access to building and renovation changes, healthcare compliance documentation and emergency information.',
  },
];

const MyCard = ({ title, body }) => (
  <Card style={cardStyle}>
    <div style={cardIconStyle}>
      <span role="img" aria-label="Healthcare Icon">
        🏥
      </span>
    </div>
    <CardContent>
      <Typography variant="h6" component="div" style={h6Style}>
        {title}
      </Typography>
      <div style={bodyStyle}>{body}</div>
      <Button component="a" href="#" style={buttonStyle}>
        Read More
      </Button>
    </CardContent>
  </Card>
);

const MyCardGrid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', columnGap: '1px' }}>
    {cardData.map((data, index) => (
      <MyCard key={index} {...data} />
    ))}
  </div>
);

export default MyCardGrid;
