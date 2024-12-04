import React from 'react';
import './style.css';

const SelectField = ({ label, options, value, onChange, name }) => (
  <div className="select-field">
    <label htmlFor={name}>{label}</label>
    <select
      id={name} // Adiciona um id para associar ao label
      value={value}
      onChange={(e) => onChange(e)}
      name={name}
    >
      <option value="">Selecione</option>
      {options.map((option) =>
        typeof option === 'string' ? (
          <option key={option} value={option}>
            {option}
          </option>
        ) : (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      )}
    </select>
  </div>
);

export default SelectField;
