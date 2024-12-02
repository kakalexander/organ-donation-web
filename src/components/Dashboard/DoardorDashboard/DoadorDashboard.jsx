import React from 'react';
import CadastrarOrgaoForm from './CadastrarOrgaoForm';
import OrgansCadastradosList from './OrgansCadastradosList';

const DoadorDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <CadastrarOrgaoForm />
        <OrgansCadastradosList />
      </div>
    </div>
  );
};

export default DoadorDashboard;
