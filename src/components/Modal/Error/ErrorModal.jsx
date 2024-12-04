import React from 'react';
import '../style.css';

const ErrorModal = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ErrorModal;
