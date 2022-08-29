import './App.css';
import React, { useState } from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route 
} from 'react-router-dom';
import Navbar from './Navbar';
import Trending from "./Trending"
import CoinId from "./CoinId";
import Login from './Login/Login';
import useToken from './useToken';


function App() {
  
  const { token, setToken } = useToken();


  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>Hello</h1>
          <Routes>
              <Route path="/trending" exact element={<Trending />} />
              <Route path="/trending/:id" element={<CoinId />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
