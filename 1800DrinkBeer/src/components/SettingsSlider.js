import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const SettingsSlider = ({ label, value, onChange, min, max, step }) => (
  <Box sx={{ marginBottom: 3 }}>
    <Typography sx={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '18px', marginBottom: 1 }}>
      {label}: {value}
    </Typography>
    <Slider
      value={value}
      onChange={(e, newValue) => onChange(newValue)}
      min={min}
      max={max}
      step={step}
      marks
    />
  </Box>
);

export default SettingsSlider;
