import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import StartButton from './StartButton';
import { useNavigate } from 'react-router-dom';

const NameInput = () => {
const [names, setNames] = useState([]);
const [currentName, setCurrentName] = useState('');

const handleAddName = () => {
    if (currentName.trim() && names.length < 12) {
    setNames([...names, currentName.trim()]);
    setCurrentName('');
    }
};

const handleDeleteName = (nameToDelete) => {
setNames(names.filter((name) => name !== nameToDelete));
};

const navigate = useNavigate();

const handleStartGame = () => {
    navigate('/quotesgameplay');
};

  return (
    <Box
    sx={{
        position: 'absolute',
        bottom: '8%',
        width: '90%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
    }}
    >
    <StartButton onClick={handleStartGame} show={names.length >= 2} />
    <Box
        sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        justifyContent: 'center',
        }}
    >
                {names.map((name, index) => (
        <Chip
            key={index}
            label={name}
            color="secondary"
            onDelete={() => handleDeleteName(name)}
        />
        ))}
    </Box>
    <Box sx={{ display: 'flex', gap: 1, width: '100%', justifyContent: 'center' }}>
        <TextField
        id="name-input"
        placeholder="Enter Name"
        variant="outlined"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
        sx={{
            flexGrow: 1,
            backgroundColor: 'white',
            borderRadius: 1,
            input: {
            color: 'black', 
            },
        }}
        />
        <Button
        variant="contained"
        color="primary"
        onClick={handleAddName}
        disabled={!currentName.trim() || names.length >= 12}
        >
        Add
        </Button>
    </Box>
    </Box>
);
};

export default NameInput;
