import React, { useState } from "react";
import {TextField,Button, Container, Typography, Box, Paper, Divider, Link,} from "@mui/material";
import { keyframes } from '@mui/system';

// useState sy ham data store or update karty hain.

// const rise = {
//   '0%': {
//     transform: 'translateY(0) scale(1)',
//     opacity: 0.4,
//   },
//   '100%': {
//     transform: 'translateY(-1000px) scale(1.5)',
//     opacity: 0,
//   },
// };

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


const Login = () => {
const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };
 

  return (
  <>
    <Box position="relative" minHeight="100vh" overflow="hidden" bgcolor="#ffe6e6">
    {/* BUBBLES */}
   
      
    {/* 🔴 Bubbles Background */}
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex={0}
      bgcolor='lightgray'
    >
      {bubbleStyles.map((style, index) => (
        <Box
          key={index}
          sx={{
            position: "fixed",
            bottom: 0,
            left: style.left,
            width: style.width,
            height: style.height,
            backgroundColor: "#800000",
            borderRadius: "50%",
            opacity: 0.5,
            animation: `${rise} ${style.animationDuration} linear infinite`,
          }}
        />
      ))}
    </Box>
    </Box>
    <Container maxWidth="xs" sx={{position:'relative',zIndex:50}}>
      <Paper elevation={12} sx={{ padding: 4, marginTop: 25, textAlign: "center", borderRadius: 5 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom 
        sx={{ color: '#800000', fontFamily:'Playfair Display,serif', fontWeight:'bold',zIndex:'5' }} >
          DearDiary
        </Typography>
        <Typography variant="subtitle2" color="gray" gutterBottom sx={{zIndex:'5'}}>
          CREATE YOUR SPACE
        </Typography>

        <form onSubmit={handleLogin}>
          <Box display="flex" flexDirection="column" gap={2} >
          <TextField
  label="Enter username"
  variant="outlined"
  fullWidth
  sx={{
    backgroundColor: '#FADADD', 
     border: '1px solid gray',
     zIndex:5,
    input: { color: 'black' }, // text color inside input
    '&:hover': {
      backgroundColor: '#f5c6cb',
      borderColor: 'lightgray', // hover border
      color: '#555',           // hover text color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray", // default
      },
      "&:hover fieldset": {
        borderColor: "darkgray", // on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray", // on focus
      },
      "&.Mui-focused input": {
        color: "black", // input text color on focus
      },
    },
    "& label": {
      color: "gray", // default label color
    },
    "& label.Mui-focused": {
      color: "gray", // label color on focus
    },
  }
  }
/>
<TextField
  label="Enter password"
  // variant="contained"
  fullWidth
  
    sx={{
      fontWeight: 'bold',
      border: '1px solid gray',
      zIndex:5,
    backgroundColor: '#FADADD',  // light maroon shade
    input: { color: 'black' }, // text color inside input
    
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "gray", // default
      },
      "&:hover fieldset": {
        borderColor: "darkgray", // on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "gray", // on focus
      },
      "&.Mui-focused input": {
        color: "black", // input text color on focus
      },
    },
    "& label": {
      color: "gray", // default label color
    },
    "& label.Mui-focused": {
      color: "gray", // label color on focus
    },
    }
    }
/>
          <Button
  type="submit"
  variant="contained"
  sx={{
    fontWeight: 'bold',
    height: 45,
    backgroundColor: '#800000', // maroon hex
    color: '#fff',               // white text
    '&:hover': {
      backgroundColor: '#660000', // darker maroon on hover
    },
  }}
>
  LOGIN
</Button>

          </Box>
        </form>

        <Divider sx={{ my: 2 }}>OR</Divider>

        <Button
  // variant="contained"
  fullWidth
  
    sx={{
      color: 'gray',
  fontWeight: 'bold',
  border: '3px solid gray',
    backgroundColor: '#FADADD',  // light maroon shade
    input: { color: 'white' }, // text color inside input
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: 'gray', // border color
      },
      "&:hover fieldset": {
        borderColor: 'gray', // on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: 'gray', // when focused
      },
    },
  }}
>
  Create an Account
</Button>
</Paper>
</Container>
</>
  );
  };

export default Login;


