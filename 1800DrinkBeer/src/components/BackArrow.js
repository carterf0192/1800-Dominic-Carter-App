import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(-1)} sx={{ marginBottom: 2 }}>
      <ArrowBackIcon fontSize="large" />
    </IconButton>
  );
};

export default BackArrow;
