import React, { useState } from 'react';
import { donateOrgan } from '../../../services/organService';
import InputField from '../../Fields/InputField/InputField';
import SelectField from '../../Fields/SelectField/SelectField';
import { BloodTypes, OrganTypes, Genders } from '../../../utils/enum/enum';

const DonateOrganForm = ({ onDonateSuccess }) => {
  const [formData, setFormData] = useState({
    nome_doador: '',
    nome: '',
    descricao: '',
    tipo: '',
    blood_type: '',
    sexo: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newOrgan = await donateOrgan(formData);
      onDonateSuccess((prev) => [...prev, newOrgan]); // Atualiza a lista de órgãos e exibe a mensagem de agradecimento
      setFormData({
        nome_doador: '',
        nome: '',
        descricao: '',
        tipo: '',
        blood_type: '',
        sexo: '',
      });
    } catch (err) {
      setError('Erro ao cadastrar órgão. Por favor, tente novamente.');
    }
  };

  return (
    <div className="donate-organ-form">
      <h2>Cadastrar Órgão</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome do Doador"
          type="text"
          name="nome_doador"
          placeholder="Digite seu nome"
          value={formData.nome_doador}
          onChange={handleChange}
        />
        <InputField
          label="Nome do Órgão"
          type="text"
          name="nome"
          placeholder="Digite o nome do órgão"
          value={formData.nome}
          onChange={handleChange}
        />
        <InputField
          label="Descrição"
          type="text"
          name="descricao"
          placeholder="Adicione uma descrição (opcional)"
          value={formData.descricao}
          onChange={handleChange}
        />
        <SelectField
          label="Tipo do Órgão"
          name="tipo"
          options={OrganTypes}
          value={formData.tipo}
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
        <div className="terms">
          <input type="checkbox" required /> Declaro que li e confirmo a veracidade das informações contidas no cadastro.
          <br />
          <input type="checkbox" required /> Concordo com os{' '}
          <a href="/terms">termos e condições</a>.
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default DonateOrganForm;
