import React from 'react';
import MetricBox from '../MetricBox/MetricBox';
import './HospitalMetrics.css';

const HospitalMetrics = ({ data }) => (
  <div className="hospital-metrics">
    <MetricBox title="Total de Hospitais" value={`${data.total || 0} cadastrados`} />
    <MetricBox title="Grandes (+500)" value={`${data.grandes || 0} grandes`} />
  </div>
);

export default HospitalMetrics;
