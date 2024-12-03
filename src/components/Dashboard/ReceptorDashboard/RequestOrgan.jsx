import React, { useState, useEffect } from 'react';
import { createOrgan, fetchOrganList } from '../../../services/organService';
import './receptorDashboard.css';

const RequestOrgan = () => {
  const [organList, setOrganList] = useState([]);
  const [formData, setFormData] = useState({
    nome: '',
    prazo: '',
    mensagem: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadOrgans = async () => {
      try {
        const organs = await fetchOrganList();
        setOrganList(organs);
      } catch (err) {
        console.error('Erro ao carregar órgãos:', err);
        setError(err.response?.data?.message || 'Erro ao carregar a lista de órgãos.');
      }
    };
    loadOrgans();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createOrgan(formData);
      alert('Solicitação criada com sucesso!');
    } catch (err) {
      setError('Erro ao criar a solicitação.');
    }
  };

  return (
    <div className="request-organ">
      <h2>Solicitar Doação</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Órgão:</label>
        <select name="nome" value={formData.nome} onChange={handleChange} required>
          <option value="">Escolha o órgão</option>
          {organList.map((organ) => (
            <option key={organ.id} value={organ.nome}>
              {organ.nome}
            </option>
          ))}
        </select>
        <label>Prazo:</label>
        <input
          type="text"
          name="prazo"
          placeholder="Determine o prazo (ex.: 7 dias)"
          value={formData.prazo}
          onChange={handleChange}
          required
        />
        <label>Mensagem:</label>
        <textarea
          name="mensagem"
          placeholder="Escreva uma mensagem detalhando sua solicitação"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
        <div className="terms">
          <input type="checkbox" required /> Declaro que li e confirmo a veracidade das informações.
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
};

export default RequestOrgan;
