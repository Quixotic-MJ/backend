import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your pages
import LandingPage from './pages/landingPage/landingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Pricing from './pages/landingPage/pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        //Landing Page Routes
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;