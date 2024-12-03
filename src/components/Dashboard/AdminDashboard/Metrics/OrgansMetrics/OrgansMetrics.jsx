import React from 'react';
import './OrgansMetrics.css';

const OrgansMetrics = ({ data, onAddOrgan }) => (
    <div className="organs-metrics">
        <div className="card-header-content">
            <h2>Órgãos cadastrados</h2>
            <button className="add-organ-button" onClick={onAddOrgan}>
                Cadastrar órgão
            </button>
        </div>
        <div className="metrics-row">
            <div className="metric-box">
                <h3>Total</h3>
                <p>{data.total} órgãos</p>
            </div>
            <div className="metric-box">
                <h3>Últimas 24h</h3>
                <p>{data.last24h} órgãos</p>
            </div>
            <div className="metric-box">
                <h3>Últimos 7 dias</h3>
                <p>{data.last7days} órgãos</p>
            </div>
        </div>
        <div className="organs-list">
            {data.organsList && data.organsList.length > 0 ? (
                data.organsList.map((organ, index) => (
                    <div key={index} className="organ-item">
                        <strong>{`${organ.nome} | ${organ.tipo_sanguineo} | ${organ.sexo}`}</strong>
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

    </div>
);

export default OrgansMetrics;
