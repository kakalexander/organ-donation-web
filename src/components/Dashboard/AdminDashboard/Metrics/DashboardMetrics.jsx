import React from 'react';
import Card from '../Card/Card';
import MetricBox from '../../MetricBox';
import './DashboardMetrics.css';

const DashboardMetrics = ({ data, title, onAddUser }) => (
  <Card
    title={
      <div className="card-header-content">
        {title}
        <button className="add-user-button" onClick={onAddUser}>
          Cadastrar Usuário
        </button>
      </div>
    }
  >
    <div className="metrics-row">
      <div className="metrics-left">
        <MetricBox title="Total" value={`${data.total || 0} cadastrados`} />
        <MetricBox title="Online (-24h)" value={`${data.online || 0} ativos`} />
      </div>
      <div className="metrics-right">
        <div className="recent-user">
          <strong>Último cadastro doador:</strong>
          <p>
            {data.ultimoDoador?.nome || 'N/A'} ({data.ultimoDoador?.tipo || ''}) |{' '}
            {data.ultimoDoador?.genero || ''}
          </p>
          <small>{data.ultimoDoador?.tempo || 'N/A'}</small>
        </div>
        <div className="recent-user">
          <strong>Último cadastro receptor:</strong>
          <p>
            {data.ultimoReceptor?.nome || 'N/A'} ({data.ultimoReceptor?.tipo || ''}) |{' '}
            {data.ultimoReceptor?.genero || ''}
          </p>
          <small>{data.ultimoReceptor?.tempo || 'N/A'}</small>
        </div>
        <div className="recent-user">
          <strong>Último online:</strong>
          <p>
            {data.ultimoOnline?.nome || 'N/A'} ({data.ultimoOnline?.tipo || ''}) |{' '}
            {data.ultimoOnline?.genero || ''}
          </p>
          <small>{data.ultimoOnline?.tempo || 'N/A'}</small>
        </div>
      </div>
    </div>
  </Card>
);

export default DashboardMetrics;
