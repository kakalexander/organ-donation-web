import React, { useEffect, useState, useCallback } from 'react';
import Header from '../../../components/Layout/Header/Header';
import DashboardMetrics from '../AdminDashboard/Metrics/DashboardMetrics';
import { fetchDashboardData } from '../../../services/api';
import HospitalMetrics from '../AdminDashboard/Metrics/HospitalMetrics/HospitalMetrics';
import Graph from '../Graph';
import Card from './Card/Card';
import OrgansMetrics from '../AdminDashboard/Metrics/OrgansMetrics/OrgansMetrics';
import Loading from '../../common/LoadingSpinner';
import './dashboard.css';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetchDashboardData();
      setData(response.data);
    } catch (err) {
      console.error('Erro ao buscar dados:', err);
      setError('Erro ao carregar os dados.');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) return <div className="error-message">{error}</div>;
  if (!data) return <div className="loading"><Loading /></div>;

  return (
    <div>
      <Header title="Dashboard" />
      <div className="admin-dashboard">
        <div className="dashboard-container">
          <OrgansMetrics
            className="organs-metrics"
            data={{
              total: data.orgaos.total,
              ultimas_24h: data.orgaos.ultimas_24h,
              ultimos_7_dias: data.orgaos.ultimos_7_dias,
              detalhes: data.orgaos.detalhes,
            }}
            onUpdate={fetchData}
          />
          <div className="right-section">
            <div className="right-top-card">
              <DashboardMetrics
                data={data.usuarios}
                title="Usuários cadastrados"
                onUpdate={fetchData}
              />
            </div>
            <Card title="Hospitais cadastrados">
              <div className="hospital-card">
                <div className="hospital-content">
                  <div className="hospital-left">
                    <HospitalMetrics
                      data={{
                        total: data.hospitais.total,
                        grandes: data.hospitais.grandes,
                      }}
                    />
                  </div>
                  <div className="hospital-right">
                    <Graph data={data.hospitais.grafico} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
