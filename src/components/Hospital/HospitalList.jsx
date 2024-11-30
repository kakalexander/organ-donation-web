import React, { useState, useEffect } from 'react';
import { fetchHospitals, deleteHospital } from '../../api/hospitals';

const HospitalList = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const loadHospitals = async () => {
      try {
        const response = await fetchHospitals();
        setHospitals(response.data);
      } catch (error) {
        console.error('Erro ao carregar hospitais:', error);
      }
    };

    loadHospitals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteHospital(id);
      setHospitals(hospitals.filter((hospital) => hospital.id !== id));
    } catch (error) {
      console.error('Erro ao deletar hospital:', error);
    }
  };

  return (
    <div>
      <h1>Hospitais</h1>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            {hospital.name} - {hospital.address}
            <button onClick={() => handleDelete(hospital.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
