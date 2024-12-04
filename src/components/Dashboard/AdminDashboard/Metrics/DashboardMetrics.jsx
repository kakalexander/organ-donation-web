import React, { useState } from 'react'; // Incluído o useState
import Card from '../Card/Card';
import MetricBox from '../../MetricBox';
import './DashboardMetrics.css';
import Modal from '../../../Modal/Modal';
import UserForm from '../../../../pages/User/UserForm';
import { createUser } from '../../../../services/userService';

const DashboardMetrics = ({ data, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddUser = async (userData) => {
    try {
      await createUser(userData); // Chama o serviço para cadastro
      alert('Usuário cadastrado com sucesso!');
      setIsModalOpen(false);
    } catch (error) {
      alert('Erro ao cadastrar usuário.');
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
              <strong>Último cadastro doador:</strong>
              <p>{data.ultimoDoador?.nome || 'N/A'}</p>
              <small>{data.ultimoDoador?.tempo || 'N/A'}</small>
            </div>
            <div className="recent-user">
              <strong>Último cadastro receptor:</strong>
              <p>{data.ultimoReceptor?.nome || 'N/A'}</p>
              <small>{data.ultimoReceptor?.tempo || 'N/A'}</small>
            </div>
          </div>
        </div>
      </Card>

      <Modal
        title="Cadastrar Usuário"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <UserForm onSubmit={handleAddUser} />
      </Modal>
    </>
  );
};

export default DashboardMetrics;
