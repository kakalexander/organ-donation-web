import React from 'react';
import Card from './Card';
import MetricBox from '../MetricBox';
import './DashboardMetrics.css';

const DashboardMetrics = ({ data, title }) => (
  <Card title={title}>
    <div className="metrics-row">
      <MetricBox title="Total" value={`${data.total || 0}`} />
      <MetricBox title="Últimas 24h" value={`${data.ultimas_24h || 0}`} />
      <MetricBox title="Últimos 7 dias" value={`${data.ultimos_7_dias || 0}`} />
    </div>
  </Card>
);

export default DashboardMetrics;
