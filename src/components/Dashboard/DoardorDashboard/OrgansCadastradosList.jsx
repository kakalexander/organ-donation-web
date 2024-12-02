import React from 'react';

const OrgansSolicitadosList = () => {
  const solicitacoes = [
    { orgao: 'Pulmão', status: 'Em andamento', prazo: '6 dias' },
    { orgao: 'Rim', status: 'Concluído', prazo: '1 dia' },
  ];

  return (
    <div>
      <h2>Órgãos solicitados</h2>
      <ul>
        {solicitacoes.map((solicitacao, index) => (
          <li key={index}>
            <strong>{solicitacao.orgao}</strong>: {solicitacao.status} - Prazo: {solicitacao.prazo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgansSolicitadosList;
