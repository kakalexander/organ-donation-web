import React, { useEffect, useState } from 'react';
import { fetchOrganStats } from '../../api/orgaos';

const OrgansOverview = () => {
  const [stats, setStats] = useState({ total: 0, last24h: 0, last7d: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetchOrganStats();
      setStats(response.data);
    };
    fetchStats();
  }, []);

  return (
    <div className="organs-overview">
      <h2>Órgãos cadastrados</h2>
      <div className="stats">
        <div>Total: {stats.total} órgãos</div>
        <div>Últimas 24h: {stats.last24h} órgãos</div>
        <div>Últimos 7 dias: {stats.last7d} órgãos</div>
      </div>
    </div>
  );
};

export default OrgansOverview;
