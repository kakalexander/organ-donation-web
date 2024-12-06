import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './pages/Auth/Login/Login';
import RegisterForm from './pages/Auth/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
    const userProfile = parseInt(localStorage.getItem('user_profile'), 10);

    return (
        <>
            <LoadingSpinner />
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
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
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
