import React from 'react';
import '../style.css';

const SuccessModal = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose} className="close-button">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
