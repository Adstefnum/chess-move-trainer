import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
