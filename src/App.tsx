import React from 'react';
import './App.css';
import MainTemplate from './component/Main/MainTemplate';
import './global.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WatchTemplate from './component/Watch/WatchTemplate';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainTemplate />} />
          <Route path="/watch" element={<WatchTemplate />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
