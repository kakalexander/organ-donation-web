import React from 'react';

const OrgansCadastradosList = () => {
  const orgaos = [
    { orgao: 'Rim', status: 'Disponível', cadastro: '1 dia atrás' },
    { orgao: 'Fígado', status: 'Aguardando', cadastro: '3 dias atrás' },
  ];

  return (
    <div>
      <h2>Órgãos cadastrados</h2>
      <ul>
        {orgaos.map((orgao, index) => (
          <li key={index}>
            <strong>{orgao.orgao}</strong>: {orgao.status} - Cadastrado: {orgao.cadastro}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgansCadastradosList;
