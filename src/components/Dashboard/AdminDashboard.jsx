import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../../services/api';

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // Para exibir erros na interface

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDashboardData();
        setData(response);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setError('Erro ao carregar os dados. Verifique sua conexão ou faça login novamente.');
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>; // Exibe o erro na tela
  if (!data) return <p>Carregando...</p>; // Exibe enquanto os dados estão sendo carregados

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* Renderizar informações do dashboard */}
    </div>
  );
};

export default AdminDashboard;
