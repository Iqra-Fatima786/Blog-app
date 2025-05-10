import React, { useState } from 'react';
import { Box, TextField, Tabs, Tab, Grid, Paper, Typography } from '@mui/material';
import Blogs from '../data/Blogs';
import "./BlogPage.css";
// Updated category list with 5 more
const categories = [
  'All',
  'Motivation',
  'Programming',
  'Mindfulness',
  'Productivity',
  'Cooking',
  'Sport',
  'Tech',
  'Lifestyle',
  'Studies',
  'Health',
  'Finance',
  'Travel',
  'Education',
  'Books'
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlogs = Blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box sx={{ backgroundColor: '#f2f2f2', minHeight: '100vh', p: 3 }}>
      
      {/* Search + Category Bar */}
      <Box
  sx={{
    backgroundColor: '#e0e0e0',
    borderRadius: '20px',
    boxShadow: 3,
    p: 2,
    mb: 4,
    animation: 'bubbleFade 2s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 2,
  }}
>
  {/* Categories - LEFT side */}
  <Tabs
    value={selectedCategory}
    onChange={(e, newVal) => setSelectedCategory(newVal)}
    variant="scrollable"
    scrollButtons="auto"
    sx={{
      flexGrow: 1,
      maxWidth: '75%',
      '.MuiTab-root': {
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
          backgroundColor: '#d3d3d3',
        },
        borderRadius: '12px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
      },
    }}
  >
    {categories.map((cat) => (
      <Tab key={cat} label={cat} value={cat} />
    ))}
  </Tabs>

  {/* Search Bar - RIGHT side */}
  <TextField
    variant="outlined"
    placeholder="Search Blogs"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    sx={{
      backgroundColor: 'white',
      borderRadius: '10px',
      width: '350px',
    }}
  />
</Box>

      {/* Blog Cards */}
      <Grid container spacing={2}>
        {filteredBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom>{blog.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {blog.category} | Author: {blog.author}
              </Typography>
              <Typography variant="body1" mt={1}>
                {blog.content.substring(0, 100)}...
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogPage;





