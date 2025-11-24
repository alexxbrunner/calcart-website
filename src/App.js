import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUpPage from './components/SignUpPage';
import Impressum from './components/Impressum';
import AGB from './components/AGB';
import Datenschutz from './components/Datenschutz';

function App() {
  return (
    <Router>
      <div className="relative">
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
