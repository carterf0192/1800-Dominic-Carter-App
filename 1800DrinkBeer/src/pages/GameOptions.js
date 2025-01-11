import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Switch,
  Slider,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const loadSettings = () => {
  const saved = localStorage.getItem('gameSettings');
  return saved
    ? JSON.parse(saved)
    : {
        random: false,
        doubleDrinks: false,
        countdownEnabled: false,
        countdownValue: 0,
        teams: false,
        optionsPerQuestion: 2,
      };
};

const GameOptions = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const [settings, setSettings] = useState(loadSettings);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  useEffect(() => {
    localStorage.setItem('gameSettings', JSON.stringify(settings));
  }, [settings]);

  const handleSwitchChange = (key) => (event) => {
    setSettings((prev) => ({ ...prev, [key]: event.target.checked }));
  };

  const handleCountdownSliderChange = (event, newValue) => {
    setSettings((prev) => ({ ...prev, countdownValue: newValue }));
  };

  const handleOptionsSliderChange = (event, newValue) => {
    setSettings((prev) => ({ ...prev, optionsPerQuestion: newValue }));
  };

  const countdownMarks = [
    { value: 0, label: 'Off' },
    { value: 5, label: '5s' },
    { value: 10, label: '10s' },
    { value: 15, label: '15s' },
    { value: 20, label: '20s' },
    { value: 25, label: '25s' },
    { value: 30, label: '30s' },
  ];

  const optionsMarks = [
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'background.default',
        color: 'text.primary',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <IconButton
          color="primary"
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: isSmallScreen ? '24px' : '32px',
          }}
        >
          Game Options
        </Typography>
      </Box>
      <Grid container spacing={3}>
        {/* Random */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Random</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Switch
            checked={settings.random}
            onChange={handleSwitchChange('random')}
          />
        </Grid>

        
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Double Drinks</Typography>
          <Typography variant="body2">
            Causes each penalty to be doubled for extra intensity.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Switch
            checked={settings.doubleDrinks}
            onChange={handleSwitchChange('doubleDrinks')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Countdown Timer</Typography>
          <Typography variant="body2">
            Require answers within a certain time limit (0 = Off).
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
        >
          <Switch
            checked={settings.countdownEnabled}
            onChange={handleSwitchChange('countdownEnabled')}
          />
          {settings.countdownEnabled && (
            <Box sx={{ width: '100%', maxWidth: 300, mt: 2 }}>
              <Slider
                value={settings.countdownValue}
                onChange={handleCountdownSliderChange}
                step={5}
                min={0}
                max={30}
                marks={countdownMarks}
              />
            </Box>
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Teams</Typography>
          <Typography variant="body2">
            Split players into teams and track points collectively.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <Switch
            checked={settings.teams}
            onChange={handleSwitchChange('teams')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Options Per Question</Typography>
          <Typography variant="body2">
            Number of answer choices per question (2 to 6).
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 300 }}>
            <Slider
              value={settings.optionsPerQuestion}
              onChange={handleOptionsSliderChange}
              step={1}
              min={2}
              max={6}
              marks={optionsMarks}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameOptions;
