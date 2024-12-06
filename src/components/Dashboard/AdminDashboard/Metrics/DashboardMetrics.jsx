import React, { useState } from 'react';
import Card from '../Card/Card';
import MetricBox from '../../MetricBox';
import './DashboardMetrics.css';
import Modal from '../../../Modal/Modal';
import UserForm from '../../../../pages/User/UserForm';

const DashboardMetrics = ({ data, title, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSuccess = () => {
    setIsModalOpen(false); // Fecha o modal
    if (onUpdate) {
      onUpdate(); // Atualiza os dados no AdminDashboard
    }
  };

  return (
    <>
      <Card
        title={
          <div className="card-header-content">
            {title}
            <button className="add-user-button" onClick={() => setIsModalOpen(true)}>
              Cadastrar Usuário
            </button>
          </div>
        }
      >
        <div className="metrics-row">
          <div className="metrics-left">
            <MetricBox title="Total" value={`${data?.total || 0} cadastrados`} />
            <MetricBox title="Online (-24h)" value={`${data?.ativos_24h || 0} ativos`} />
          </div>
          <div className="metrics-right">
            <div className="recent-user">
              <strong>Último cadastro doador:</strong>
              <p>{data?.ultimo_doador?.name || 'N/A'}</p>
              <small>{new Date(data?.ultimo_doador?.created_at || '').toLocaleString()}</small>
            </div>
            <div className="recent-user">
              <strong>Último cadastro receptor:</strong>
              <p>{data?.ultimo_receptor?.name || 'N/A'}</p>
              <small>{new Date(data?.ultimo_receptor?.created_at || '').toLocaleString()}</small>
            </div>
          </div>
        </div>
      </Card>

      <Modal
        title="Cadastrar Usuário"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {/* Passa o handleSuccess como onSuccess para o UserForm */}
        <UserForm onSuccess={handleSuccess} />
      </Modal>
    </>
  );
};

export default DashboardMetrics;
