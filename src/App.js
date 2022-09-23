import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin';
import Kontakt from './Pages/Kontakt';
import Survey from './Pages/Survey';
import BagUndersøgelsen from './Pages/BagUndersøgelsen';
import DataEtik from './Pages/DataEtik';
import Kvalitetssikring from './Pages/Kvalitetssikring';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/bagundersogelsen" element={<BagUndersøgelsen />} />
        <Route path="/dataetik" element={<DataEtik />} />
        <Route path="/kvalitetssikring" element={<Kvalitetssikring />} />
      </Routes>
    </Router>
  );
}

export default App;
