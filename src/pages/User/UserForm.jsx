import React, { useState } from 'react';
import InputField from '../../components/Fields/InputField/InputField';
import SelectField from '../../components/Fields/SelectField/SelectField';
import Button from '../../components/Button/Button';
import { BloodTypes, UserTypesAdmin } from '../../utils/enum/enum'; 
import { createUser } from '../../services/userService';
import { useLoading } from '../../context/LoadingContext';

const UserForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birth_date: '',
    password: '',
    password_confirmation: '',
    tipo_cadastro: '',
    blood_type: '',
  });

  const { showLoading, hideLoading } = useLoading();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading();
    try {
      const createdUser = await createUser(formData);
      alert('Usuário cadastrado com sucesso!');
      if (onSuccess) {
        onSuccess(createdUser); 
      }
    } catch (error) {
      alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    } finally {
      hideLoading();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Nome" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
      <InputField
        label="Data de Nascimento"
        type="date"
        name="birth_date"
        value={formData.birth_date}
        onChange={handleChange}
      />
      <InputField
        label="Senha"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <InputField
        label="Confirmação de Senha"
        type="password"
        name="password_confirmation"
        value={formData.password_confirmation}
        onChange={handleChange}
      />
      <SelectField
        label="Tipo de Cadastro"
        name="tipo_cadastro"
        options={UserTypesAdmin}
        value={formData.tipo_cadastro}
        onChange={handleChange}
      />
      <SelectField
        label="Tipo Sanguíneo"
        name="blood_type"
        options={BloodTypes}
        value={formData.blood_type}
        onChange={handleChange}
      />
      <Button type="submit" label="Cadastrar" />
    </form>
  );
};

export default UserForm;
