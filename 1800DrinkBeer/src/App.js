import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quotes from './pages/Quotes';
import GameSelect from './pages/GameSelect';
import QuotesGameplay from './pages/QuotesGameplay';
import GameOptions from './pages/GameOptions'; 
import FetchCSVData from './wrappers/csvData';

function App() {
  const csvData = FetchCSVData();

  useEffect(() => {
    console.log(csvData);
  }, [csvData]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameSelect />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotesgameplay" element={<QuotesGameplay />} />
        <Route path="/game-options" element={<GameOptions />} />
      </Routes>
    </Router>
  );
}

export default App;
