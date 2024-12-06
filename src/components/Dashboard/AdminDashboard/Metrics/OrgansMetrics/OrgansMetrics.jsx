import React, { useState } from 'react';
import MetricBox from '../MetricBox/MetricBox';
import Modal from '../../../../Modal/Modal';
import OrgansForm from '../../../../../pages/Organs/OrgansForm';
import './OrgansMetrics.css';

const OrgansMetrics = ({ data, onUpdate }) => {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const handleSuccess = (newOrgan) => {
      setModalOpen(false); // Fecha o modal
      if (onUpdate) {
        onUpdate(); // Atualiza os dados no AdminDashboard
      }
    };
  
    return (
      <div className="organs-metrics">
        <div className="card-header-content">
          <h2>Órgãos cadastrados</h2>
          <button className="add-organ-button" onClick={() => setModalOpen(true)}>
            Cadastrar órgão
          </button>
        </div>
        <div className="metrics-row">
          <MetricBox title="Total" value={`${data.total} órgãos`} className="organ-metric-box" />
          <MetricBox title="Últimas 24h" value={`${data.ultimas_24h} órgãos`} className="organ-metric-box" />
          <MetricBox title="Últimos 7 dias" value={`${data.ultimos_7_dias} órgãos`} className="organ-metric-box" />
        </div>
        <div className="organs-list">
          {data?.detalhes && data.detalhes.length > 0 ? (
            data.detalhes.map((organ) => (
              <div key={organ.id} className="organ-item">
                <strong>{`${organ.nome} | ${organ.blood_type} | ${organ.sexo}`}</strong>
                <p>
                  Doado por: {organ.user?.name || 'Desconhecido'} ({organ.user?.blood_type || 'N/A'})
                </p>
                <small>{new Date(organ.created_at).toLocaleString()}</small>
              </div>
            ))
          ) : (
            <p>Nenhum órgão cadastrado.</p>
          )}
        </div>
  
        {/* Modal para cadastro */}
        <Modal title="Cadastrar órgão" isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <OrgansForm onSuccess={handleSuccess} />
        </Modal>
      </div>
    );
  };
  
export default OrgansMetrics;
  