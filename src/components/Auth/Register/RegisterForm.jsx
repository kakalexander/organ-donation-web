import React, { useState } from 'react';
import { register } from '../../../services/auth';
import { BloodTypes, UserTypes } from '../../../utils/enum/enum';
import SucessModal from '../../../components/Modal/Sucess/SuccessModal';
import ErrorModal from '../../../components/Modal/Error/ErrorModal';
import '../../../components/Auth/Register/style.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birth_date: '',
    blood_type: '',
    password: '',
    confirmPassword: '',
    tipo_cadastro: '',
  });
  const [step, setStep] = useState(1); // Controle das etapas
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // Para armazenar a mensagem de erro

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage('As senhas não coincidem.');
        setErrorModalOpen(true);
        return;
      }

      // Tenta realizar o registro
      await register(formData);
      setSuccessModalOpen(true); // Exibe o modal de sucesso
    } catch (err) {
      console.error('Erro ao cadastrar:', err);

      // Verifica se o erro é devido a email duplicado
      const apiError = err.response?.data?.errors;
      if (apiError?.email && apiError.email[0].includes('has already been taken')) {
        setErrorMessage('EMAIL JÁ ESTÁ SENDO USADO'); // Mensagem de email já cadastrado
      } else {
        setErrorMessage('Erro ao cadastrar. Tente novamente.'); // Mensagem genérica
      }

      setErrorModalOpen(true); // Exibe o modal de erro
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Lado esquerdo - Informações do projeto */}
        <div className="side-info">
          <h1>Saiba mais</h1>
          <p>Conheça a história do projeto</p>
          <p>
            Este projeto visa inovar o sistema de doação de órgãos no Brasil,
            buscando conectar uma situação tão importante com as tecnologias mais
            atualizadas do mercado...
          </p>
          <div className="side-buttons">
            <button onClick={() => (window.location.href = '/about')}>
              Quero conhecer mais do projeto
            </button>
            <button onClick={() => (window.location.href = '/login')}>
              Já tem uma conta? Faça login
            </button>
          </div>
        </div>

        {/* Lado direito - Formulário */}
        <div className="register-form">
          <h2>Cadastrar-se</h2>
          <p>Preencha os campos indicados para criar uma conta</p>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="step-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Insira seu nome completo"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Insira seu e-mail"
                  required
                />
                <input
                  type="date"
                  name="birth_date"
                  value={formData.birth_date}
                  onChange={handleChange}
                  required
                />
                <select
                  name="blood_type"
                  value={formData.blood_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Informe o seu tipo sanguíneo</option>
                  {BloodTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="navigation-buttons">
                  <button type="button" onClick={handleNext}>
                    Próximo
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="step-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Crie uma senha"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirme sua senha"
                  required
                />
                <select
                  name="tipo_cadastro"
                  value={formData.tipo_cadastro}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o tipo de usuário</option>
                  {UserTypes.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <div className="navigation-buttons">
                  <button type="button" onClick={handlePrevious}>
                    Voltar
                  </button>
                  <button type="submit">Cadastrar</button>
                </div>
              </div>
            )}
          </form>
          <div className="carousel-indicators">
            <span className={`dot ${step === 1 ? 'active' : ''}`} />
            <span className={`dot ${step === 2 ? 'active' : ''}`} />
          </div>
          <div className="navigation-footer">
            <a href="/login">Problemas com o cadastro?</a>
          </div>
        </div>
      </div>

      {/* Modais */}
      <SucessModal
        isOpen={successModalOpen}
        title="Cadastro Realizado!"
        message="Seu cadastro foi realizado com sucesso."
        onClose={() => setSuccessModalOpen(false)}
      />
      <ErrorModal
        isOpen={errorModalOpen}
        title="Erro no Cadastro"
        message={errorMessage}
        onClose={() => setErrorModalOpen(false)}
      />
    </div>
  );
};

export default RegisterForm;
