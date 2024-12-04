import React from 'react';
import RequestOrgan from './RequestOrgan';
import Header from '../../Layout/Header/Header';
import './receptorDashboard.css';

const ReceptorDashboard = () => {
  return (
    <div>
      <Header />
      <div className="receptor-dashboard">
        <div className="dashboard-content">
          <RequestOrgan />
        </div>
      </div>
    </div>
  );
};

export default ReceptorDashboard;
