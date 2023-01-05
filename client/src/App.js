import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import Game from './Game';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
          
        <Route path="/game" element={<Game/>} />
      </Routes>
  );
};

export default App;
