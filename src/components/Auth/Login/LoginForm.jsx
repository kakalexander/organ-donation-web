import React, { useState } from 'react';
import { login } from '../../../services/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err || 'Erro ao fazer login.');
    }
  };

  return (
    <div className="login-form">
      <h2>Fazer Login</h2>
      <p>Informe suas credenciais para acessar a plataforma</p>
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
      <a href="/recover" className="recover-link">Problemas com o acesso?</a>
    </div>
  );
};

export default LoginForm;
