import React, { useState } from 'react';
import { register } from '../../../api/auth';
import { BloodTypes, UserTypes } from '../../../utils/enum';

const RegisterForm = () => {
    const [step, setStep] = useState(1); // Controla a etapa atual
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        bloodType: '',
        password: '',
        confirmPassword: '',
        userType: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleNext = () => {
        if (step === 1) {
            if (!formData.name || !formData.email || !formData.bloodType) {
                setError('Por favor, preencha todos os campos.');
                return;
            }
            setError(null);
        }
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        try {
            const response = await register(formData);
            setSuccess('Usuário cadastrado com sucesso!');
            setFormData({
                name: '',
                email: '',
                birthDate: '',
                bloodType: '',
                password: '',
                confirmPassword: '',
                userType: '',
            });
            setError(null);
            console.log('Cadastro bem-sucedido:', response.data);
        } catch (err) {
            setError('Erro ao cadastrar. Tente novamente.');
            setSuccess(null);
        }
    };

    return (
        <div className="register-form">
            <h2>Cadastrar-se</h2>
            <p>Preencha os campos indicados para criar uma conta</p>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="step-1">
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Insira seu nome completo"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <label>E-mail:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Insira seu e-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <label>Data de nascimento:</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                        <label>Tipo sanguíneo:</label>
                        <select
                            name="bloodType"
                            value={formData.bloodType}
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
                        <div className="carousel-indicators">
                            <span className={`dot ${step === 1 ? 'active' : ''}`} />
                            <span className={`dot ${step === 2 ? 'active' : ''}`} />
                        </div>
                        <button type="button" onClick={handleNext}>
                            Próximo
                        </button>
                    </div>
                )}
                {step === 2 && (
                    <div className="step-2">
                        <label>Senha:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Crie uma senha de pelo menos oito caracteres"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <label>Confirmação da senha:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Repita sua senha"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <label>Tipo de cadastro:</label>
                        <select
                            name="userType"
                            value={formData.userType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Informe se será doador ou receptor</option>
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
        </div>
    );
};

export default RegisterForm;
