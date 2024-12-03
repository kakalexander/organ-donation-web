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
          src="/images/Foto de Perfil.svg" // Substituir com o caminho real da imagem do perfil
          alt="Profile"
          className="profile-image"
        />
        <span className="welcome-text">Bem-vindo, {name}</span>
      </div>
      <div className="header-right">
        <a href="/about">Saiba mais</a>
        <a href="/help">Ajuda</a>
        <a href="/logout" className="logout-button">
          Sair
          <img src="/images/sair-icon.svg" alt="Logout" className="logout-icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
