import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const SettingsSwitch = ({ label, state, onChange }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
    <Typography sx={{ fontFamily: '"Bebas Neue", sans-serif', fontSize: '18px' }}>
      {label}
    </Typography>
    <Switch checked={state} onChange={onChange} />
  </Box>
);

export default SettingsSwitch;
