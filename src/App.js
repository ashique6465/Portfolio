import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import Explore from './Pages/Home/Explore';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="main-content"> {/* Add the main-content div */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
