import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Signup";
import Explore from "./pages/Explore";
import Knowus from './pages/Knowus'; 
import BlogPage from "./pages/BlogPage";



function App() {

  const [showForm, setShowForm] = useState(false);  //yy usestate ka use karna hai t.ky navbar ka output show ho
  const [showExplore, setShowExplore] = useState(true);
  const [showKnowus, setShowKnowus] = useState(false);
  const [showBlog, setShowBlog] = useState(false);



  return (
    <div>
      {/* Navbar */}
      <AppBar position="static" sx={{backgroundColor:'#800000',position:'relative',zIndex:'20'}}>
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1,fontFamily:'Playfair Display,serif', fontWeight:'bold' }}>
            DearDiary
          </Typography>

          {/* <Box variant="contained" sx={{ fontFamily: 'Playfair Display,serif' }}> */}
          <Button color="inherit" sx={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px'}}onClick={() => { setShowExplore(true); setShowForm(false); }}>Explore</Button>
          <Button color="inherit"sx={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px'}}onClick={() => { setShowExplore(false); setShowForm(false); setShowKnowus(true); }}>Know us</Button>
          <Button color="inherit"sx={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px'}}onClick={() => { setShowExplore(false); setShowForm(false); setShowKnowus(false); setShowBlog(true); }}> Blog</Button>
          <Button color="inherit" sx={{fontFamily:'Montserrat, sans-serif',fontWeight:'bold',fontSize:'20px'}}onClick={() => setShowForm(true)}>Sign up</Button>
        {/* </Box> */}

        </Toolbar>
      </AppBar>

      {/* Signup Form */}
      {showForm && (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "calc(100vh - 64px)", // 64px is approx AppBar height
      backgroundColor: "lightgray",   // light background
      
    }}
  >
    <Login />
  </Box>
  
)}

      {!showForm && showExplore && <Explore />}
      {showKnowus && <Knowus />}
      {showBlog && <BlogPage />}


    </div>
  );
}
export default App;
