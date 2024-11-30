import React from 'react';
import RegisterForm from '../components/Auth/Register/RegisterForm';
import SideInfo from '../components/Auth/Register/SideInfo';
import '../components/Auth/Register/register.css';

const Register = () => (
  <div className="register-page">
    <div className="register-container">
      <SideInfo />
      <RegisterForm />
    </div>
  </div>
);

export default Register;
