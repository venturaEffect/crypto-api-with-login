import './App.css';
import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from 'react-router-dom';
import Trending from "./Trending"
import CoinId from "./CoinId";



function App() {
  

  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/" exact element={<Trending />} />
              <Route path="/trending/:id" element={<CoinId />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
