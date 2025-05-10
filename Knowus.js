import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

// Bubble animation keyframes
const rise = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
  100% {
    transform: translateY(-1000px) scale(1.5);
    opacity: 0;
  }
`;

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

const Knowus = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', bgcolor: '#ffe6e6' }}>
      
      {/* Bubbles Background */}
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex={0}
        bgcolor="lightgrey"
      >
        {bubbleStyles.map((style, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: style.left,
              width: style.width,
              height: style.height,
              backgroundColor: '#800000',
              borderRadius: '50%',
              opacity: 0.5,
              animation: `${rise} ${style.animationDuration} linear infinite`,
            }}
          />
        ))}
      </Box>

      {/* Single Paper Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Paper elevation={12} sx={{ padding: 6, marginTop: 12, textAlign: 'center', borderRadius: 5 }}>
         
         <Typography variant='h5' color='#800000' fontWeight="bold" fontFamily='sans-serif' fontSize='30px'>
         Welcome to DearDiary your personal corner of the internet.</Typography>
 
         <Typography variant='h6' color='gray' fontFamily='sans-serif' marginTop='20px'>
         We believe that everyone has a story worth sharing. Whether it's a fleeting thought, a daily memory, or a life-changing experience, DearDiary gives you the space to express yourself freely.
         </Typography>

          <Typography variant="h4" fontWeight="bold" color="#800000" gutterBottom marginTop='20px' fontFamily='sans-serif'>
            About Us
          </Typography>
          <Typography variant="h6" color="gray" sx={{ marginBottom: 4 }}>
        
A heartfelt blogging platform designed to give your voice a place to live, grow, and inspire.

We understand that writing is more than just putting words on a page — it's about expressing your inner world. Here, you can pen your stories, document your journey, share your dreams, or simply speak your mind. Whether it’s joy, heartbreak, growth, or reflection — DearDiary is your personal canvas.

This space celebrates honesty, creativity, and connection. It’s where your thoughts aren’t judged, your feelings are valid, and your stories matter. From quiet reflections to bold confessions, every post adds to the beautiful tapestry of human experience.

So go ahead. Write for yourself. Write to connect.
<Typography variant='h6' color="gray">Write to heal.
Because your story deserves to be heard.</Typography>

          </Typography>

          <Typography variant="h4" fontWeight="bold" color="#800000" gutterBottom fontFamily='sans-serif'>
          Why I Created This Platform
          </Typography>
          <Typography variant="h6" color="gray" sx={{ marginTop:2}}>
          I wanted to create more than just a website – I wanted to build a space that feels like home. A cozy corner of the internet where people can write without fear of judgment, where creativity flows freely, and where readers can find something they relate to.
DearDiary is constantly evolving. With each update, I'm working to add new features, improve existing ones, and make this platform even more enjoyable for yu. o
          </Typography>

          <Typography variant='h4' color='maroon' fontFamily='sans-serif' fontWeight='bold' marginTop='20px'>
          Let Your Voice Echo</Typography>

          <Typography variant='h6' color='gray' fontFamily='sans-serif' marginTop='15px'>
          Encourages you to speak your truth and share your story, no matter how big or small. In a world full of noise, it’s easy to feel like your words don’t matter. But at DearDiary, we believe that every voice is powerful and unique, and that each story has the ability to make a difference.

When you share your thoughts, you inspire others to do the same. Your words create ripples of change, connecting people across distances and allowing them to feel seen and heard. Your voice, whether it’s a whisper or a shout, has the potential to touch lives and inspire others to speak up too.

So, let your voice echo far beyond the pages. Share your experiences, your struggles, your joys, and your dreams. The world is waiting to hear what you have to say.
          </Typography>
       
          <Typography variant='h4' fontWeight='bold' color='maroon ' fontFamily='sans-serif' marginTop='20px'>
            Our Mission
          </Typography>
          <Typography variant='h6' color='gray' fontFamily='sans-serif' marginTop='10px'>
          At DearDiary, we aim to encourage self-expression, foster creativity, and build a community of passionate writers and readers. Through writing, we hope to connect with others, share meaningful stories, and inspire each other every day.
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="#800000" gutterBottom marginTop='20px'>
            Join the Journey
          </Typography>
          <Typography variant="h6" color="gray" fontFamily='sans-serif'>
            We invite you to join us. Share your experiences, your stories, your wisdom.
            Let’s create a vibrant community of storytellers. Every voice matters,
            and with each blog post shared, we get closer to building a platform that values creativity and authenticity.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Knowus;




