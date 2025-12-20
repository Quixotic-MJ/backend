import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. Check if the token exists in local storage
  const token = localStorage.getItem('token');

  // 2. If no token, redirect to Login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 3. If token exists, render the requested page (Dashboard)
  return children;
};

export default ProtectedRoute;