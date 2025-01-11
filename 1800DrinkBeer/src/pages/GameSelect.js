import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const GameSelect = () => {
  const navigate = useNavigate();

  const gameTitles = [
    { name: 'Quotes!', route: '/quotes' },
    { name: 'Game 2', route: '/game2' }, 
    { name: 'Game 3', route: '/game3' },
    { name: 'Game 4', route: '/game4' }, 
  ];

  const handleGameSelect = (route) => {
    navigate(route); 
  };

  return (
    <Box
      sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default', 
      }}
    >
      
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: '"Bebas Neue", sans-serif',
          color: 'text.primary',
          textAlign: 'center',
          marginBottom: 4,
        }}
      >
        Select a Game!
      </Typography>

      <Grid container spacing={4} maxWidth="600px">
        {gameTitles.map((game, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                height: '100px', 
                fontSize: '60px',
                fontFamily: '"Bebas Neue", sans-serif', 
              }}
              onClick={() => handleGameSelect(game.route)}
            >
              {game.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GameSelect;
