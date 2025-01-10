import React from 'react';
import Box from '@mui/material/Box';
import Title from '../components/text/Title';
import Subtext from '../components/text/Subtext';
import NameInput from '../components/NameInput';

const LandingPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh', 
        textAlign: 'center',
        padding: 3, 
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Box>
        <Title />
        <Subtext />
      </Box>
      <NameInput />
    </Box>
  );
};

export default LandingPage;
