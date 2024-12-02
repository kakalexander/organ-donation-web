import React, { useState } from 'react';

const SolicitarOrgaoForm = () => {
  const [form, setForm] = useState({
    orgao: '',
    prazo: '',
    mensagem: '',
    confirmacao: false,
    termos: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitação enviada:', form);
    // Lógica de envio para o backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Solicitar doação</h2>
      <input
        type="text"
        name="orgao"
        placeholder="Escolha o órgão a ser solicitado"
        value={form.orgao}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="prazo"
        placeholder="Determine o prazo (ex.: 7 dias)"
        value={form.prazo}
        onChange={handleChange}
        required
      />
      <textarea
        name="mensagem"
        placeholder="Escreva uma mensagem detalhando sua solicitação"
        value={form.mensagem}
        onChange={handleChange}
        maxLength="500"
        required
      />
      <div>
        <label>
          <input
            type="checkbox"
            name="confirmacao"
            checked={form.confirmacao}
            onChange={handleChange}
            required
          />
          Confirmo a veracidade das informações.
        </label>
        <label>
          <input
            type="checkbox"
            name="termos"
            checked={form.termos}
            onChange={handleChange}
            required
          />
          Concordo com os termos.
        </label>
      </div>
      <button type="submit">Solicitar</button>
    </form>
  );
};

export default SolicitarOrgaoForm;
