import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ReceptorDashboard from '../Dashboard/ReceptorDashboard/ReceptorDashboard';
import DoadorDashboard from './DoardorDashboard/DonorDashboard';

const DashboardRouter = () => {
  const tipo_cadastro = localStorage.getItem('tipo_cadastro'); 

  if (tipo_cadastro === 'admin') return <AdminDashboard />;
  if (tipo_cadastro === 'receptor') return <ReceptorDashboard />;
  if (tipo_cadastro === 'doador') return <DoadorDashboard />;
  
  return <p>Usuário não reconhecido. Verifique seu perfil.</p>;
};

export default DashboardRouter;
