import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}
