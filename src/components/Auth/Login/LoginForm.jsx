import React, { useState } from 'react';
import { login } from '../../../api/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log('Login bem-sucedido:', response.data);
      localStorage.setItem('token', response.data.token); // Armazena o token
      window.location.href = '/dashboard'; // Redireciona após o login
    } catch (err) {
      setError('E-mail ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <div className="login-form">
      <h2>Fazer Login</h2>
      <p>Informe suas credenciais para acessar a plataforma</p>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>E-mail:</label>
        <input
          type="email"
          placeholder="Digite seu e-mail aqui"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Senha:</label>
        <input
          type="password"
          placeholder="Digite sua senha aqui"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      <a href="/recover" className="recover-link">Problemas com o acesso?</a>
    </div>
  );
};

export default LoginForm;
