import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './pages/Auth/Login/Login';
import RegisterForm from './pages/Auth/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  const userProfile = parseInt(localStorage.getItem('user_profile'), 10); // Converte para número

  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route path="/login" element={<LoginForm />} />

        {/* Rota de registro */}
        <Route path="/register" element={<RegisterForm />} />

        {/* Rota de dashboard baseada no perfil do usuário */}
        <Route
          path="/dashboard"
          element={
            userProfile === 1 ? (
              <Dashboard userType="Admin" />
            ) : userProfile === 2 ? (
              <Dashboard userType="Receptor" />
            ) : userProfile === 3 ? (
              <Dashboard userType="Doador" />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Rota padrão (redireciona para login) */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
