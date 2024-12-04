import React, { useState } from 'react';
import SelectField from '../../components/Fields/SelectField/SelectField';
import InputField from '../../components/Fields/InputField/InputField';
import Button from '../../components/Button/Button';
import { BloodTypes, OrganTypes, Genders } from '../../utils/enum/enum';
import { createOrgan } from '../../services/organService';

const OrgansForm = ({ userType }) => {
  const [formData, setFormData] = useState({
    nome_doador: '',
    nome: '',
    descricao: '',
    tipo: '',
    blood_type: '',
    sexo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');
    if (!isFormValid) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    try {
      await createOrgan(formData); // Envia os dados ao serviço
      alert('Órgão cadastrado com sucesso!');
      setFormData({
        nome_doador: '',
        nome: '',
        descricao: '',
        tipo: '',
        blood_type: '',
        sexo: '',
      });
    } catch (error) {
      console.error('Erro ao cadastrar órgão:', error);
      alert('Erro ao cadastrar órgão. Por favor, tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Nome do Doador"
        type="text"
        placeholder="Informe o nome do doador"
        value={formData.nome_doador}
        onChange={handleChange}
        name="nome_doador"
      />
      <InputField
        label="Nome do Órgão"
        type="text"
        placeholder="Informe o nome do órgão"
        value={formData.nome}
        onChange={handleChange}
        name="nome"
      />
      <InputField
        label="Descrição"
        type="text"
        placeholder="Informe a descrição do órgão"
        value={formData.descricao}
        onChange={handleChange}
        name="descricao"
      />
      <SelectField
        label="Tipo"
        options={OrganTypes}
        value={formData.tipo}
        onChange={handleChange}
        name="tipo"
      />
      <SelectField
        label="Tipo Sanguíneo"
        options={BloodTypes}
        value={formData.blood_type}
        onChange={handleChange}
        name="blood_type"
      />
      <SelectField
        label="Sexo"
        options={Genders}
        value={formData.sexo}
        onChange={handleChange}
        name="sexo"
      />
      <Button type="submit" label={userType === 'receptor' ? 'Solicitar' : 'Cadastrar'} />
    </form>
  );
};

export default OrgansForm;
