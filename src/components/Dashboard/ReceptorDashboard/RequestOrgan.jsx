import React, { useState, useEffect } from 'react';
import receptorService from '../../../services/receptorService';
import { BloodTypes, Genders } from '../../../utils/enum/enum';
import SuccessModal from '../../Modal/Sucess/SuccessModal';
import InputField from '../../Fields/InputField/InputField';
import SelectField from '../../Fields/SelectField/SelectField';
import './receptorDashboard.css';

const RequestOrgan = () => {
  const [formData, setFormData] = useState({
    nome: '',
    prazo: '',
    mensagem: '',
    blood_type: '',
    sexo: '',
    telefone: '',
    endereco: '',
    status: '',
  });
  const [solicitations, setSolicitations] = useState([]);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const loadSolicitations = async () => {
      try {
        const fetchedSolicitations = await receptorService.fetchSolicitations();
        setSolicitations(fetchedSolicitations);
      } catch (err) {
        console.error('Erro ao carregar solicitações:', err);
      }
    };

    loadSolicitations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newSolicitation = await receptorService.createSolicitation(formData);
      setSolicitations((prev) => [...prev, newSolicitation]);
      setModalOpen(true);
      setFormData({
        nome: '',
        prazo: '',
        mensagem: '',
        blood_type: '',
        sexo: '',
        telefone: '',
        endereco: '',
        status: '',
      });
    } catch (err) {
      setError('Erro ao criar a solicitação. Por favor, tente novamente.');
    }
  };

  return (
    <div className="receptor-dashboard">
      <div className="request-organ">
        <h2>Solicitar Doação</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <InputField
            label="Órgão"
            type="text"
            name="nome"
            placeholder="Escolha o órgão a ser solicitado"
            value={formData.nome}
            onChange={handleChange}
          />
          <InputField
            label="Prazo"
            type="text"
            name="prazo"
            placeholder="Determine o prazo (ex.: 7 dias)"
            value={formData.prazo}
            onChange={handleChange}
          />
          <SelectField
            label="Tipo Sanguíneo"
            name="blood_type"
            options={BloodTypes}
            value={formData.blood_type}
            onChange={handleChange}
          />
          <SelectField
            label="Sexo"
            name="sexo"
            options={Genders}
            value={formData.sexo}
            onChange={handleChange}
          />
          <InputField
            label="Telefone"
            type="text"
            name="telefone"
            placeholder="Digite o número de telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
          <InputField
            label="Endereço"
            type="text"
            name="endereco"
            placeholder="Digite o endereço"
            value={formData.endereco}
            onChange={handleChange}
          />
          <InputField
            label="Mensagem"
            type="text"
            name="mensagem"
            placeholder="Escreva uma mensagem (opcional)"
            value={formData.mensagem}
            onChange={handleChange}
          />
          <div className="terms">
            <input type="checkbox" required /> Declaro que li e confirmo a veracidade das informações contidas na
            solicitação.
            <br />
            <input type="checkbox" required /> Concordo com os{' '}
            <a href="/terms">termos e condições</a>.
          </div>
          <button className='button' type="submit">Solicitar</button>
        </form>
      </div>
      <div className="solicitations-list">
        <h2>Órgãos Solicitados</h2>
        <div className="solicitation-scroll">
          {solicitations.length === 0 ? (
            <p>Nenhum órgão solicitado ainda.</p>
          ) : (
            solicitations.map((solicitation) => (
              <div key={solicitation.id} className="solicitation-card">
                <h3>{solicitation.nome}</h3>
                <p>Tipo sanguíneo: {solicitation.blood_type}</p>
                <p>Sexo: {solicitation.sexo}</p>
                <p>Telefone: {solicitation.telefone}</p>
                <p>Endereço: {solicitation.endereco}</p>
                <p>Criado em: {new Date(solicitation.created_at).toLocaleString()}</p>
                <p>Prazo: {solicitation.prazo}</p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal de Sucesso */}
      <SuccessModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitação criada com sucesso!"
        message="Sua solicitação foi enviada e aparecerá na lista de órgãos solicitados."
      />
    </div>
  );
};

export default RequestOrgan;
