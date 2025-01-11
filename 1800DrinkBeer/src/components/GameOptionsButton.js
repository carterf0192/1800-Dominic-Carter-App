import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import SettingsIcon from '@mui/icons-material/Settings';

const GameOptionsButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game-options');
  };

  return (
    <Box sx={{ marginTop: 1, width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          maxWidth: '75%', 
          height: '100%',   
          fontSize: '24px',
          fontFamily: '"Bebas Neue", sans-serif', 
        }}
        onClick={handleClick}
      >
        Game Options
        <SettingsIcon sx={{ marginLeft: 3 }} />
      </Button>
    </Box>
  );
};

export default GameOptionsButton;
