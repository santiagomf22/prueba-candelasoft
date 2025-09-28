import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import ProductionPage from './pages/ProductionPage';
import { ProtectedRoute } from './components/navigation';

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/production" replace /> : <AuthPage />} 
      />
      <Route 
        path="/production" 
        element={
          <ProtectedRoute>
            <ProductionPage />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-[#222222] overflow-x-hidden">
      <AuthProvider>
        <Router>
          <AppRoutes />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
