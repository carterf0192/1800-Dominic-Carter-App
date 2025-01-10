import React from 'react';
import Box from '@mui/material/Box';
import QuotesLogo from '../../assets/QuotesLogo.png';

const Title = () => {
  return (
    <Box
      component="img"
      src={QuotesLogo} 
      alt="Quotes Logo"
      sx={{
        maxWidth: '100%',   
        width: '100%',      
        marginBottom: 5,    
      }}
    />
  );
};

export default Title;
