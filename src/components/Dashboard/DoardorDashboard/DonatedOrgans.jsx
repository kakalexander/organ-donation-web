import React from 'react';

const DonatedOrgans = ({ organs }) => {
  return (
    <div className="donated-organs">
      <h3>Órgãos cadastrados</h3>
      {organs.length === 0 ? (
        <p>Nenhum órgão doado ainda.</p>
      ) : (
        organs.map((organ, index) => (
          <div key={index} className="organ-item">
            <h4>{organ.nome}</h4>
            <p>Tipo Sanguíneo: {organ.blood_type}</p>
            <p>Sexo: {organ.sexo}</p>
            <p>{organ.tempo}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DonatedOrgans;
