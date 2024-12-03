import React from 'react';
import RequestOrgan from './RequestOrgan';
import Header from '../../Layout/Header/Header';
import './receptorDashboard.css';

const ReceptorDashboard = () => {
  return (
    <div className="receptor-dashboard">
      <Header />
      <div className="dashboard-content">
        <RequestOrgan />
      </div>
    </div>
  );
};

export default ReceptorDashboard;
