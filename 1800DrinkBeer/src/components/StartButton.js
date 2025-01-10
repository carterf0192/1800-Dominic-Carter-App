import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StartButton = ({ onClick, show }) => {
  if (!show) return null;

  return (
    <Box sx={{ textAlign: 'center', marginTop: 2 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{
          fontSize: '24px', 
          fontFamily: '"Bebas Neue", sans-serif',
          padding: '10px 40px', 
          borderRadius: '8px', 
        }}
      >
        Start Game
      </Button>
    </Box>
  );
};

export default StartButton;
