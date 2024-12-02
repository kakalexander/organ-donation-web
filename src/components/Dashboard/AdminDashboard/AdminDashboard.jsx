import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../../../services/api';
import '../../../styles/dashboard.css';

const AdminDashboard = () => {
  const [data, setData] = useState(null); // Inicializa como null
  const [error, setError] = useState(null); // Para exibir erros na interface

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDashboardData();
        setData(response.data); // Atualiza o estado com os dados da API
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError('Erro ao carregar os dados. Verifique sua conexão ou faça login novamente.');
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="error-message">{error}</div>;
  if (!data) return <div className="loading">Carregando...</div>; // Mostra enquanto os dados não foram carregados

  // Desestruturação segura de `data`
  const orgaos = data?.orgaos || { total: 0, ultimas_24h: 0, ultimos_7_dias: 0, detalhes: [] };
  const usuarios = data?.usuarios || {
    total: 0,
    ativos_24h: 0,
    ultimo_doador: {},
    ultimo_receptor: {},
    ultimo_online: {},
  };
  const hospitais = data?.hospitais || { total: 0, grandes: 0 };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bem-vindo, Admin</h1>
        <div className="dashboard-actions">
          <a href="/help">Ajuda</a>
          <a href="/logout" className="logout-button">Sair</a>
        </div>
      </header>

      <div className="dashboard-content">
        {/* Seção de Órgãos Cadastrados */}
        <section className="dashboard-section">
          <h2>Órgãos cadastrados</h2>
          <div className="dashboard-metrics">
            <MetricBox title="Total" value={`${orgaos.total} órgãos`} />
            <MetricBox title="Últimas 24h" value={`${orgaos.ultimas_24h} órgãos`} />
            <MetricBox title="Últimos 7 dias" value={`${orgaos.ultimos_7_dias} órgãos`} />
          </div>
          <ul className="orgao-list">
            {orgaos.detalhes.map((orgao, index) => (
              <li key={index}>
                <span>{`${orgao.nome || 'Desconhecido'} | ${orgao.tipo_sanguineo || '-'} | ${orgao.sexo || '-'}`}</span>
                <span>{`Doador: ${orgao.doador || 'N/A'} | ${orgao.tempo || 'N/A'}`}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Seção de Usuários Cadastrados */}
        <section className="dashboard-section">
          <h2>Usuários cadastrados</h2>
          <div className="dashboard-metrics">
            <MetricBox title="Total" value={`${usuarios.total} cadastrados`} />
            <MetricBox title="Online (-24h)" value={`${usuarios.ativos_24h} ativos`} />
          </div>
          <ul className="user-list">
            <li>
              Último cadastro doador:{' '}
              {usuarios.ultimo_doador.nome
                ? `${usuarios.ultimo_doador.nome} (${usuarios.ultimo_doador.tipo_sanguineo})`
                : 'N/A'}
            </li>
            <li>
              Último cadastro receptor:{' '}
              {usuarios.ultimo_receptor.nome
                ? `${usuarios.ultimo_receptor.nome} (${usuarios.ultimo_receptor.tipo_sanguineo})`
                : 'N/A'}
            </li>
            <li>Último online: {usuarios.ultimo_online.nome || 'N/A'}</li>
          </ul>
        </section>

        {/* Seção de Hospitais Cadastrados */}
        <section className="dashboard-section">
          <h2>Hospitais cadastrados</h2>
          <div className="dashboard-metrics">
            <MetricBox title="Total" value={`${hospitais.total} cadastrados`} />
            <MetricBox title="Grandes (+500)" value={`${hospitais.grandes} grandes`} />
          </div>
          <div className="hospital-graph">
            {/* Placeholder para o gráfico */}
            <p>Gráfico de cadastros por ano</p>
          </div>
        </section>
      </div>
    </div>
  );
};

// Componente para exibir métricas
const MetricBox = ({ title, value }) => (
  <div className="metric-box">
    <span>{title}</span>
    <h3>{value}</h3>
  </div>
);

export default AdminDashboard;
