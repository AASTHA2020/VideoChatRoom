import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/room/${roomCode}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        // Background image from the public folder
        backgroundImage: `url('/bgimage.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          // Semi-transparent white background for the form container
          backgroundColor: 'rgba(248, 245, 285, 0.8)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional shadow for better visibility
          fontWeight: 'bold', // Make font bold
          // Ensure Typography text is bold
          '& .MuiTypography-root': {
            fontWeight: 'bold',
          },
        }}
      >
        <Typography variant="h5" gutterBottom>
          Enter the room code:
        </Typography>
        <TextField
          variant="outlined"
          
          size="small"
          placeholder="Enter the room code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#003366', // Dark blue background color for the button
            color: 'white', // White text color
            '&:hover': {
              backgroundColor: '#004080', // Brighter blue on hover
            },
          }}
          fullWidth
        >
          Enter the room
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
