import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/landingPage/landingPage';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/dashboard/dashboard';
import Pricing from './pages/landingPage/pricing';
import ProtectedRoute from './components/ProtectedRoute'; // <--- 1. Import it

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes (Anyone can see) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pricing" element={<Pricing />} />

        {/* Protected Routes (Only logged in users) */}
        {/* 2. Wrap Dashboard inside ProtectedRoute */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* Catch-all: Redirect unknown paths to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;