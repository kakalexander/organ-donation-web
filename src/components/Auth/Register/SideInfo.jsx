import React from 'react';

const SideInfo = () => (
  <div className="side-info">
    <h1>Saiba mais</h1>
    <p>Conheça a história do projeto</p>
    <p>
    Este projeto visa inovar o sistema de doação de órgãos no Brasil, buscando conectar 
    uma situação tão importante com as tecnologias mais atualizadas do mercado, garantindo 
    que, além de funcional e eficiente, o sistema esteja sempre junto com as tendências atuais,
    sempre trazendo a melhor experiência para o usuário, independente do momento.
    </p>
    <div className="side-buttons">
      <button onClick={() => (window.location.href = '/')}>Já tenho cadastro!</button>
      <button onClick={() => (window.location.href = '/about')}>Quero conhecer mais do projeto</button>
    </div>
  </div> 
);    

export default SideInfo;
