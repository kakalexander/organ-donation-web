import React from 'react';

const ThankYouMessage = ({ userName }) => {
  return (
    <div className="thank-you-message">
      <h2>Obrigado, {userName}!</h2>
      <p>
        Doar órgãos e sangue é uma atitude heróica e extremamente corajosa. Todos nós responsáveis pelo projeto,
        todos aqueles que necessitam de doações e todas as famílias destas pessoas agradecem sua iniciativa e bravura
        por fazer história e salvar muitas vidas através de você mesmo. Carregue dentro de você a certeza de que o mundo,
        hoje, está melhor porque você seguiu em frente com esta decisão.
      </p>
      <button className="share-button">Compartilhar</button>
    </div>
  );
};

export default ThankYouMessage;
