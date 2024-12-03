import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController, // Adicione o LineController
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registre todos os componentes necessários do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController, // Registre o LineController
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data }) => {
  const chartData = {
    labels: data?.labels || [],
    datasets: [
      {
        label: 'Hospitais cadastrados',
        data: data?.values || [],
        fill: false,
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4, // Suaviza as linhas
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Hospitais Cadastrados',
      },
    },
  };

  return (
    <div className="hospital-graph">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Graph;
