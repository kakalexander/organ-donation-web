import React from 'react';
import './MetricBox.css';

const MetricBox = ({ title, value }) => (
  <div className="metric-box">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export default MetricBox;
