import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ReceptorDashboard from './ReceptorDashboard/ReceptorDashboard';
import DoadorDashboard from './DoardorDashboard/DonorDashboard';

const DashboardRouter = () => {
  const tipo_cadastro = localStorage.getItem('tipo_cadastro');

  switch (tipo_cadastro) {
    case 'admin':
      return <AdminDashboard />;
    case 'receptor':
      return <ReceptorDashboard />;
    case 'doador':
      return <DoadorDashboard />;
    default:
      return <p>Usuário não reconhecido. Verifique seu perfil.</p>;
  }
};

export default DashboardRouter;
