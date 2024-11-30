import React from 'react';
import AdminDashboard from './AdminDashboard';
import ReceptorDashboard from './ReceptorDashboard';
import DoadorDashboard from './DoadorDashboard';

const DashboardRouter = ({ userType }) => {
  if (userType === 'Admin') return <AdminDashboard />;
  if (userType === 'Receptor') return <ReceptorDashboard />;
  if (userType === 'Doador') return <DoadorDashboard />;
  return <p>Usuário não reconhecido. Verifique seu perfil.</p>;
};

export default DashboardRouter;
