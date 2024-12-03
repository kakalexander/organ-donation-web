import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ReceptorDashboard from '../Dashboard/ReceptorDashboard/ReceptorDashboard';
import DoadorDashboard from '../Dashboard/DoardorDashboard/DoadorDashboard';

const DashboardRouter = () => {
  const userType = localStorage.getItem('user_type'); 

  if (userType === 'admin') return <AdminDashboard />;
  if (userType === 'receptor') return <ReceptorDashboard />;
  if (userType === 'doador') return <DoadorDashboard />;
  
  return <p>Usuário não reconhecido. Verifique seu perfil.</p>;
};

export default DashboardRouter;
