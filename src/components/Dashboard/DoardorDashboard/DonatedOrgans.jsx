import React from 'react';

const DonatedOrgans = ({ organs }) => {
  return (
    <div className="card-organs">
      <h3>Órgãos cadastrados</h3>
      <div className="organs-list">
        {organs.length === 0 ? (
          <p>Nenhum órgão doado ainda.</p>
        ) : (
          organs.map((organ) => (
            <div className="organs-registers" key={organ.id}>
              <h4>{organ.nome}</h4>
              <p>Tipo Sanguíneo: {organ.blood_type}</p>
              <p>Sexo: {organ.sexo}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DonatedOrgans;
