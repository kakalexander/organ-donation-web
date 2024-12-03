import React from 'react';
import './Card.css';

const Card = ({ title, children, buttonText, onButtonClick }) => (
  <div className="card">
    <div className="card-header">
      <h2>{title}</h2>
      {buttonText && (
        <button className="card-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      )}
    </div>
    <div className="card-content">{children}</div>
  </div>
);

export default Card;
