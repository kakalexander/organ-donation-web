import React from 'react';
import './MetricBox.css';

const MetricBox = ({ title, value, className }) => (
  <div className={`metric-box ${className}`}>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

export default MetricBox;
