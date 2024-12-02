import React from 'react';
import SolicitarOrgaoForm from './SolicitarOrgaoForm';
import OrgansSolicitadosList from './OrgansSolicitadosList';

const ReceptorDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <SolicitarOrgaoForm />
        <OrgansSolicitadosList />
      </div>
    </div>
  );
};

export default ReceptorDashboard;
