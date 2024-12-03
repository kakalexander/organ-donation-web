import React, { useEffect, useState } from 'react';
import Header from '../../../components/Layout/Header/Header';
import DashboardMetrics from './DashboardMetrics';
import { fetchDashboardData } from '../../../services/api';
import Graph from '../Graph';
import './dashboard.css';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDashboardData();
        setData(response.data);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setError('Erro ao carregar os dados.');
      }
    };

    fetchData();
  }, []);

  if (error) return <div className="error-message">{error}</div>;
  if (!data) return <div className="loading">Carregando...</div>;

  return (
    <div className="admin-dashboard">
      <Header />
      <div className="dashboard-row">
        <DashboardMetrics data={data.orgaos} title="Órgãos cadastrados" />
        <DashboardMetrics data={data.usuarios} title="Usuários cadastrados" />
      </div>
      <div className="dashboard-row">
        <div className="hospital-card">
          <div className="hospital-metrics">
            <h3>Total</h3>
            <p>{data.hospitais.total || 0} cadastrados</p>
            <h3>Grandes (+500)</h3>
            <p>{data.hospitais.grandes || 0} grandes</p>
          </div>
          <Graph data={data.hospitais.grafico} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
