import React from 'react';

const MetricBox = ({ title, value }) => (
  <div className="metric-box">
    <span>{title}</span>
    <h3>{value}</h3>
  </div>
);

export default MetricBox;
