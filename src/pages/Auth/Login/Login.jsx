import React from 'react';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import SideInfo from '../../../components/Auth/Login/SideInfo';
import '../../../components/Auth/Login/style.css';

const Login = () => (
  <div className="login-page">
    <div className="login-container">
      <LoginForm />
      <SideInfo />
    </div>
  </div>
);

export default Login;
