import React, { useState, useEffect } from 'react';
import Header from '../../Layout/Header/Header';
import DonateOrganForm from './DonateOrganForm';
import ThankYouMessage from './ThankYouMessage';
import DonatedOrgans from './DonatedOrgans';
import doadorService from '../../../services/doadorService';
import './donorDashboard.css';

const DonorDashboard = () => {
  const [donatedOrgans, setDonatedOrgans] = useState([]);
  const [userName, setUserName] = useState('Usuário'); // Nome do usuário
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const loadDonatedOrgans = async () => {
      try {
        const organs = await doadorService.fetchOrgans();
        setDonatedOrgans(organs);
      } catch (err) {
        console.error('Erro ao carregar órgãos doados:', err);
      }
    };

    loadDonatedOrgans();
  }, []);

  return (
    <div>
      <Header setUserName={setUserName} />
      <div className="donor-dashboard">
        <div className="dashboard-content">
          <DonateOrganForm
            onDonateSuccess={(newOrgans) => {
              setDonatedOrgans(newOrgans);
              setShowThankYou(true); // Exibe a mensagem de agradecimento
            }}
          />
          <div className="side-content">
            {showThankYou ? (
              <ThankYouMessage userName={userName} />
            ) : (
              <p>Cadastre um órgão para começar sua jornada de doação.</p>
            )}
            <DonatedOrgans organs={donatedOrgans} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
