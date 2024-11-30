import React from 'react';
import DashboardRouter from '../../components/Dashboard/DashboardRouter';

const Dashboard = ({ userType }) => {
  return (
    <main>
      <DashboardRouter userType={userType} />
    </main>
  );
};

export default Dashboard;
