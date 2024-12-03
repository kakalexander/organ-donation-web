import React, { useEffect, useState } from 'react';
import { fetchUserDetails } from '../../../services/api';
import './header.css';

const Header = () => {
  const [name, setUserName] = useState('Usuário');

  useEffect(() => {
    const loadUserDetails = async () => {
      try {
        const user = await fetchUserDetails();
        setUserName(user.name); // Define o nome do usuário autenticado
      } catch (err) {
        console.error('Erro ao carregar os detalhes do usuário:', err);
      }
    };

    loadUserDetails();
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/path-to-profile-image.jpg" // Substituir com o caminho real da imagem do perfil
          alt="Profile"
          className="profile-image"
        />
        <span className="welcome-text">Bem-vindo, {name}</span>
      </div>
      <div className="header-right">
        <a href="/about">Saiba mais</a>
        <a href="/help">Ajuda</a>
        <a href="/logout">
          Sair <i className="logout-icon">🔒</i>
        </a>
      </div>
    </header>
  );
};

export default Header;
