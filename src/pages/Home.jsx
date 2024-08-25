import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import CopyAllIcon from '@mui/icons-material/CopyAll';

const Home = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [generatedRoomCode, setGeneratedRoomCode] = useState('');
  const [showEnterRoom, setShowEnterRoom] = useState(false);

  // Function to generate a unique room ID
  const generateRoomCode = () => {
    const uniqueCode = 'room-' + Math.random().toString(36).substr(2, 9); // Generates a random unique ID
    setGeneratedRoomCode(uniqueCode);
    setRoomCode(uniqueCode); // Automatically set the generated code for quick access
    setShowEnterRoom(true); // Show the enter room form after generating the code
  };

  // Function to copy the room code to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedRoomCode);
    alert('Room code copied to clipboard!'); // Optional: Provide feedback to the user
  };

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
          backgroundColor: 'rgba(248, 245, 255, 0.8)',
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
        {!showEnterRoom ? (
          <>
            <Typography variant="h5" gutterBottom>
              Get your room ID:
            </Typography>
            <Button
              type="button"
              onClick={generateRoomCode}
              variant="contained"
              sx={{
                backgroundColor: '#003366', // Dark blue background color for the button
                color: 'white', // White text color
                '&:hover': {
                  backgroundColor: '#004080', // Brighter blue on hover
                },
                mb: 2, // Margin bottom for spacing
                mt: 4, // Margin top for spacing
                width: '100%', // Full width button
              }}
            >
              Get My Room ID
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Your room code:
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="h6" sx={{ mr: 2 }}>
                {generatedRoomCode}
              </Typography>
              <IconButton onClick={copyToClipboard} sx={{ color: '#003366' }}>
                <CopyAllIcon />
              </IconButton>
            </Box>
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
                width: '100%', // Full width button
              }}
              disabled={!roomCode} // Disable submit button if no room code
            >
              Enter the Room
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Home;
