import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth';
import { useLoading } from '../../../context/LoadingContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { showLoading, hideLoading } = useLoading();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    showLoading();
    try {
      const response = await login({ email, password });
      console.log('Login Response:', response); // Depuração
      localStorage.setItem('token', response.token);
      localStorage.setItem('tipo_cadastro', response.user.tipo_cadastro);
      localStorage.setItem('user_profile', response.user.id_perfil);
      navigate('/dashboard'); // Redirecionamento correto
    } catch (err) {
      console.error('Erro ao fazer login:', err); // Depuração
      setError(err?.message || 'Erro ao fazer login.');
    } finally {
      hideLoading();
    }
  };

  return (
    <div className="login-form">
      <h2>Fazer Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail aqui"
          required
        />
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha aqui"
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
