import React from 'react';

const Header = ({ userName, onLogout }) => (
  <header>
    <h1>Bem-vindo, {userName}</h1>
    <button onClick={onLogout}>Sair</button>
  </header>
);

export default Header;