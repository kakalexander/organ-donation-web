import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './pages/Auth/Login/Login';
import RegisterForm from './pages/Auth/Register/Register';
import DashboardRouter from './components/Dashboard/DashboardRouter';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
    const userProfile = localStorage.getItem('user_profile'); // Verificação básica de autenticação

    return (
        <>
            <LoadingSpinner />
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route
                        path="/dashboard"
                        element={userProfile ? <DashboardRouter /> : <Navigate to="/login" replace />}
                    />
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
