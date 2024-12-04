import React from 'react';
import './style.css';

const InputField = ({ label, type, placeholder, value, onChange, name }) => (
  <div className="input-field">
    <label htmlFor={name}>{label}</label>
    <input
      id={name} // Adiciona um id para associar ao label
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
      name={name}
    />
  </div>
);

export default InputField;
