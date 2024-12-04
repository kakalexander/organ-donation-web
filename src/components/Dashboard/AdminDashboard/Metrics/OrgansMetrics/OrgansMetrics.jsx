import React, { useState } from 'react'; // Adicionado useState
import MetricBox from '../MetricBox/MetricBox';
import Modal from '../../../../Modal/Modal'; // Importa o Modal
import OrgansForm from '../../../../../pages/Organs/OrgansForm'; // Importa o formulário
import './OrgansMetrics.css';

const OrgansMetrics = ({ data, onAddOrgan }) => {
    const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar o modal

    const handleAddOrgan = (formData) => {
        console.log('Form Submitted', formData);
        setModalOpen(false);
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
                <MetricBox
                    title="Total"
                    value={`${data.total} órgãos`}
                    className="organ-metric-box"
                />
                <MetricBox
                    title="Últimas 24h"
                    value={`${data.last24h} órgãos`}
                    className="organ-metric-box"
                />
                <MetricBox
                    title="Últimos 7 dias"
                    value={`${data.last7days} órgãos`}
                    className="organ-metric-box"
                />
            </div>
            <div className="organs-list">
                {data.organsList && data.organsList.length > 0 ? (
                    data.organsList.map((organ, index) => (
                        <div key={index} className="organ-item">
                            <strong>{`${organ.nome} | ${organ.blood_type} | ${organ.sexo}`}</strong>
                            <p>
                                Doado por: {organ.users?.[0]?.name || 'Desconhecido'} ({organ.users?.[0]?.blood_type || 'N/A'})
                            </p>
                            <small>{new Date(organ.created_at).toLocaleString()}</small>
                        </div>
                    ))
                ) : (
                    <p>Nenhum órgão cadastrado.</p>
                )}
            </div>

            {/* Modal para cadastro */}
            <Modal
                title="Cadastrar órgão"
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            >
                <OrgansForm onSubmit={handleAddOrgan} />
            </Modal>
        </div>
    );
};

export default OrgansMetrics;
