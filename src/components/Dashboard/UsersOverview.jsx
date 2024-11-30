import React, { useEffect, useState } from 'react';
import { fetchUserStats } from '../../api/usuarios';

const UsersOverview = () => {
  const [stats, setStats] = useState({ total: 0, online: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const response = await fetchUserStats();
      setStats(response.data);
    };
    fetchStats();
  }, []);

  return (
    <div className="users-overview">
      <h2>Usuários cadastrados</h2>
      <div className="stats">
        <div>Total: {stats.total}</div>
        <div>Online (últimas 24h): {stats.online}</div>
      </div>
    </div>
  );
};

export default UsersOverview;
