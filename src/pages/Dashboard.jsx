import React from 'react';
import Layout from '../components/Layout/Layout';
import OrgansOverview from '../components/Dashboard/OrgansOverview';
import UsersOverview from '../components/Dashboard/UsersOverview';

const Dashboard = () => (
  <Layout>
    <div className="dashboard">
      <OrgansOverview />
      <UsersOverview />
    </div>
  </Layout>
);

export default Dashboard;
