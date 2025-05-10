import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import { keyframes } from '@mui/system';


// 🔥 YAHAN likho rise object
const riseAnimation = {
  '0%': {
    transform: 'translateY(0) scale(1)',
    opacity: 0.4,
  },
  '100%': {
    transform: 'translateY(-1000px) scale(1.5)',
    opacity: 0,
  },
};

//  Uske baad bubbleStyles


  
  const bubbleStyles = [
    { left: '5%', width: 30, height: 30, animationDuration: '8s' },
    { left: '12%', width: 50, height: 50, animationDuration: '10s' },
    { left: '18%', width: 40, height: 40, animationDuration: '12s' },
    { left: '26%', width: 60, height: 60, animationDuration: '9s' },
    { left: '34%', width: 70, height: 70, animationDuration: '11s' },
    { left: '42%', width: 50, height: 50, animationDuration: '13s' },
    { left: '50%', width: 30, height: 30, animationDuration: '7s' },
    { left: '58%', width: 60, height: 60, animationDuration: '12s' },
    { left: '66%', width: 45, height: 45, animationDuration: '8s' },
    { left: '74%', width: 55, height: 55, animationDuration: '10s' },
    { left: '82%', width: 35, height: 35, animationDuration: '9s' },   
    { left: '88%', width: 50, height: 50, animationDuration: '11s' },  
    { left: '92%', width: 40, height: 40, animationDuration: '10s' },   
    { left: '98%', width: 60, height: 60, animationDuration: '13s' },   
  ];
  
  
  



// Animation for images
const slideUpFade = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  20% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    transform: translateY(0);
    opacity: 1;
  }
  60% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(-100px);
    opacity: 0;
  }
`;

const Explore = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        backgroundColor: 'lightgray', // Peach Background
        py: 5,
      }}
    >
      {/* Bubbles */}
      {bubbleStyles.map((style, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            bottom: '-50px',
            left: style.left,
            width: style.width,
            height: style.height,
            backgroundColor: '#800000', // Maroon color
            opacity: 0.5,
            borderRadius: '50%',
            animation: `riseBubble ${style.animationDuration} infinite ease-in`,
            zIndex: 1,
            '@keyframes riseBubble': riseAnimation,
          }}
        />
      ))}

      {/* Content */}
      <Container sx={{ textAlign: 'center', color: 'maroon', zIndex: 2, position: 'relative' }}>
        <Typography variant="h3" gutterBottom fontWeight={'bold'}>
          Where ideas meet the world
        </Typography>
        <Typography variant="h6" paragraph fontWeight={'bold'}>
          Create a unique and beautiful small blogs easily
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2, fontSize:'20px',
            backgroundColor: '#B76E79',
            color: 'white',
            '&:hover': { backgroundColor: 'maroon' },
          }}
        >
          CREATE YOUR BLOG
        </Button>

      
       {/* Images inside Grid */}
       <Grid container justifyContent="center" sx={{ mt: 8, position:'relative', height: '300px' }}>
          {/* Image 1 */}
          <Grid item xs={12} sx={{ position: 'absolute', top: 0 }}>
            <Box
              component="img"
              src="/images/download.jpeg"
              alt="Image 1"
              sx={{
                width: '900px',
                height: 'auto',
                borderRadius: 5,
                animation: `${slideUpFade} 9s ease-in-out infinite`,
                animationDelay: '8s',
              }}
            />
          </Grid>

          {/* Image 2 */}
          <Grid item xs={12} sx={{ position: 'absolute', top: 0 }}>
            <Box
              component="img"
              src="/images/blog.jpg"
              alt="Image 2"
              sx={{
                width: '900px',
                height: 'auto',
                borderRadius: 5,
                animation: `${slideUpFade} 9s ease-in-out infinite`,
                animationDelay: '3s',
              }}
            />
          </Grid>

          {/* Image 3 */}
          <Grid item xs={12} sx={{ position: 'absolute', top: 0 }}>
            <Box
              component="img"
              src="/images/img.webp"
              alt="Image 3"
              sx={{
                width: '900px',
                height: 'auto',
                borderRadius: 5,
                animation: `${slideUpFade} 9s ease-in-out infinite`,
                animationDelay: '5s',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

      {/* Keyframes for bubbles */}
      
        {`
          @keyframes riseAnimation {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.4;
            }
            100% {
              transform: translateY(-1000px) scale(1.5);
              opacity: 0;
            }
          }
        `}
      
    

export default Explore;
