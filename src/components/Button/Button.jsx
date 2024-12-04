import React from 'react';
import './style.css';

const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
