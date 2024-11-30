import React from 'react';

const SideInfo = () => (
  <div className="side-info">
    <h2>Não tem uma conta?</h2>
    <p>Crie sua conta em instantes</p>
    <p>
      Doar sangue é um ato de solidariedade. Cada doação pode salvar a vida de até quatro pessoas...
    </p>
    <div className="side-buttons">
      <button onClick={() => (window.location.href = '/register')}>Quero fazer meu cadastro</button>
      <button onClick={() => (window.location.href = '/about')}>Quero conhecer mais do projeto</button>
    </div>
  </div>
);

export default SideInfo;
